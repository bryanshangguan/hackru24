import React, { useState } from 'react';
import { Button, Card, CardBody, Spinner } from '@nextui-org/react';
import fetchRecipes from '../functions/fetchRecipes';
import { Accordion, AccordionItem } from "@nextui-org/react";

function Recipes({ apiKey, ingredients }) {
    const [recipesList, setRecipesList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetRecipes = async (ingredients) => {
        setLoading(true);

        const fetchedRecipes = await fetchRecipes(apiKey, ['beef', 'carrots', 'corn', 'peanuts']);

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
            <div>
                <p className='font-serif pl-28 mt-4 text-5xl font-bold'>Generate Recipes with Ingredients</p>
            </div>
            <div className='recipes-list px-20 mt-4'>
                {loading ? (
                    <Spinner color='primary' size='large' />
                ) : (
                    recipesList.map((recipe, index) => (
                        <Card key={index}>
                            <CardBody>
                                <Accordion>
                                    <AccordionItem key="1" aria-label="Accordion 1" title={recipe.name}>
                                        {recipe.steps.map((step, stepIndex) => (
                                            <p key={stepIndex}>{step}</p>
                                        ))}
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                    ))
                )}
            </div>
            <div className="pl-28 space-x-3 mt-4">
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