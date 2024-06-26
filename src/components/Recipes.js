import React, { useState } from 'react';
import { Button, Card, CardBody, Spinner, Accordion, AccordionItem } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import fetchRecipes from '../functions/fetchRecipes';

function Recipes({ apiKey, toggleFavorite, favorites, ingredients }) {
    const [recipesList, setRecipesList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetRecipes = async (ingredients) => {
        setLoading(true);
        const fetchedRecipes = await fetchRecipes(apiKey, ingredients);
        console.log(fetchedRecipes);
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
        <div className='flex flex-col items-center h-screen my-3'>
            <h1 className="font-bold font-serif text-center text-5xl my-11">Generate Recipes</h1>
            <div className='flex justify-center mb-8'>
                <Button
                    color='success'
                    radius='sm'
                    onClick={() => handleGetRecipes(ingredients)}
                    disabled={loading}
                    className='mr-4 px-6 py-3 text-lg'
                >
                    <FontAwesomeIcon icon={faUtensils} className='mr-2' />
                    Get Recipes
                </Button>
                <Button
                    color='danger'
                    radius='sm'
                    onClick={clearRecipes}
                    disabled={loading}
                    className='px-6 py-3 text-lg'
                >
                    <FontAwesomeIcon icon={faTrash} className='mr-2' />
                    Clear Recipes
                </Button>
            </div>
            <div className='flex justify-center w-full sm:w-4/5 md:w-2/3'>
                <div className='w-full'>
                    {loading ? (
                        <div className='flex justify-center'>
                            <Spinner color='primary' size='large' />
                        </div>
                    ) : (
                        recipesList.map((recipe, index) => (
                            <Card key={index} className='mb-4'>
                                <CardBody>
                                    <Accordion>
                                        <AccordionItem title={
                                            <div className="flex justify-between items-center">
                                                <span>{recipe.name}</span>
                                                <div className="flex gap-4 items-center">
                                                    <Button onClick={() => toggleFavorite(recipe)} color="white" aria-label="Favorite">
                                                        {favorites.includes(recipe) ? <FontAwesomeIcon icon={faStar} className='text-xl' style={{ color: "#FFD43B", }} /> : <FontAwesomeIcon icon={faStar} className='text-xl' style={{ color: "#000000", }} />}
                                                    </Button>
                                                </div>
                                            </div>
                                        }
                                        textValue={recipe.name}
                                        >
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
            </div>
        </div>
    );
}

export default Recipes;