import React, { useState } from 'react';
import { Button, Card, CardBody, Spinner, Accordion, AccordionItem } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrash } from '@fortawesome/free-solid-svg-icons';
import fetchRecipes from '../functions/fetchRecipes';

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
        <div className='container mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mb-6 mt-6'>Generate Recipes</h2>
            </div>
            <div className='flex justify-center mb-8'>
                <Button
                    auto
                    flat
                    color='success'
                    onClick={() => handleGetRecipes(ingredients)}
                    disabled={loading}
                    className='mr-4 px-6 py-3 text-lg'
                >
                    <FontAwesomeIcon icon={faUtensils} className='mr-2' />
                    Get Recipes
                </Button>
                <Button
                    auto
                    flat
                    color='default'
                    onClick={clearRecipes}
                    disabled={loading}
                    className='px-6 py-3 text-lg'
                >
                    <FontAwesomeIcon icon={faTrash} className='mr-2' />
                    Clear Recipes
                </Button>
            </div>
            <div className='flex justify-center'>
                <div className='w-full sm:w-4/5 md:w-2/3'>
                    {loading ? (
                        <div className='flex justify-center'>
                            <Spinner color='primary' size='large' />
                        </div>
                    ) : (
                        recipesList.map((recipe, index) => (
                            <Card key={index} className='mb-4'>
                                <CardBody>
                                    <Accordion>
                                        <AccordionItem key={index} aria-label='Food category' title={recipe.name}>
                                            {recipe.steps.map((step, stepIndex) => (
                                                <p key={stepIndex} className='mb-2'>{step}</p>
                                            ))}
                                        </AccordionItem>
                                    </Accordion>
                                </CardBody>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Recipes;