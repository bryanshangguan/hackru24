import React, { useState } from 'react';
import { Button, Card, CardBody, Spinner } from '@nextui-org/react';
import main from '../functions/fetchAIRecipes';

function Recipes({ ingredients }) {
    const [recipesList, setRecipesList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetRecipes = async (ingredients) => {
        setLoading(true);

        const fetchedRecipes = await main(['beef', 'carrots', 'corn', 'peanuts']);

        if (Array.isArray(fetchedRecipes)) {
            setRecipesList(fetchedRecipes);
        } else {
            console.error('Fetched recipes is not an array:', fetchedRecipes);

            setRecipesList([]);
        }
        setLoading(false);
    };

    const clearRecipes = () => {
        setRecipesList([]);
    };

    return (
        <div className='Recipes-page'>
            <div className='recipes-list px-20'>
                {loading ? (
                    <Spinner color='primary' size='large' />
                ) : (
                    recipesList.map((recipe, index) => (
                        <Card key={index}>
                            <CardBody>
                                <h2>{recipe.name}</h2>
                                {recipe.steps.map((step, stepIndex) => (
                                    <p key={stepIndex}>{step}</p>
                                ))}
                            </CardBody>
                        </Card>
                    ))
                )}
            </div>
            <div className = "pl-28 space-x-3 h-9">
                <Button auto flat color='success' onClick={() => handleGetRecipes(ingredients)} disabled={loading}>
                    Get Recipes
                </Button>
                <Button auto flat color='default' onClick={clearRecipes} disabled={loading}>
                    Clear Recipes
                </Button>
            </div>
        </div>
    );
}

export default Recipes;