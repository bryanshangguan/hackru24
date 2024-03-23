import OpenAI from 'openai';
import { OpenAIkey } from './getApiKeys';

const openai = new OpenAI({
    apiKey: OpenAIkey(),
    dangerouslyAllowBrowser: true,
});

export default async function main(ingredients) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Please give 5 recipes given these ingredients only. Assume that common condiments are available but not other main ingredients, return all of the recipes in an array: ${ingredients}`
            }],
            stream: false,
        });

        if (response.choices && response.choices.length > 0) {
            const content = response.choices[0].message.content;

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

    return recipeObjects;
}