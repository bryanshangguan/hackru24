import React, { useState } from 'react';
import { Button, Card, CardBody, Spinner, Accordion, AccordionItem } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrash, faStar} from '@fortawesome/free-solid-svg-icons';
import fetchRecipes from '../functions/fetchRecipes';

function Recipes({ apiKey, ingredients }) {
    const [recipesList, setRecipesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

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

    const toggleFavorite = (recipe) => {
        if (favorites.includes(recipe)) {
            setFavorites(favorites.filter(fav => fav !== recipe));
        } else {
            setFavorites([...favorites, recipe]);
        }
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
                                        <AccordionItem title={
                                        <div className="flex justify-between items-center">
                                            <span>{recipe.name}</span>
                                            <div className="flex gap-4 items-center">
                                                <Button onClick= {() => toggleFavorite(recipe)} color="white" aria-label="Favorite">
                                                    {favorites.includes(recipe) ? <FontAwesomeIcon icon={faStar} className='text-xl' style={{color: "#000000",}} /> : <FontAwesomeIcon icon={faStar} className='text-xl' style={{color: "#FFD43B",}} />}
                                                </Button>    
                                            </div>
                                        </div>
                                    }>
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