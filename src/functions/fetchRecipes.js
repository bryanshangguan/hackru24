import OpenAI from 'openai';

export default async function fetchRecipes(apiKey, ingredients) {
    const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
    });

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Please give 5 recipes given these ingredients only. Assume that common condiments are available but not other main ingredients, return all of the recipes in an array: ${ingredients}. Make sure the steps are show in a bullet point format and that the name of the dish is followed with a ":".`,
            }],
            stream: false,
        });

        if (response.choices && response.choices.length > 0) {
            const content = response.choices[0].message.content;
            // console.log(content);
            return parseRecipes(content);
        } else {
            console.error('Unexpected response structure:', response);
            throw new Error('Unable to retrieve recipes from the API response.');
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}

function parseRecipes(recipeString) {
    const recipes = recipeString.split(/\d+\.\s/).slice(1);

    const recipeObjects = recipes.map(recipe => {
        const [name, ...instructions] = recipe.split('\n').map(line => line.trim());

        const steps = instructions
            .filter(line => line.startsWith('- '))
            .map(line => line.slice(2));

        return {
            name: name.replace(':', '').trim(),
            steps,
        };
    });

    // console.log(recipeObjects);
    return recipeObjects;
}