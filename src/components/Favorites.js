import React from 'react';
import { Button, Card, CardBody, Accordion, AccordionItem } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Favorites({ toggleFavorite, favorites }) {
    return (
        <div className="flex flex-col items-center h-screen my-3">
            <h2 className="font-bold font-serif text-5xl my-11">Your Favorite Recipes</h2>
            <div className="w-full sm:w-4/5 md:w-2/3">
            {favorites == null || favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                favorites.map((recipe, index) => (
                    <div key={index} className="mb-4">
                        <Card>
                            <CardBody>
                                <Accordion>
                                    <AccordionItem
                                        title={
                                            <div className="flex justify-between items-center">
                                                <span>{recipe.name}</span>
                                                <div className="flex gap-4 items-center">
                                                    <Button onClick={() => toggleFavorite(recipe)} color="white" aria-label="Favorite">
                                                        {favorites.includes(recipe) ? (
                                                            <FontAwesomeIcon icon={faStar} className="text-xl" style={{ color: "#FFD43B" }} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={faStar} className="text-xl" style={{ color: "#000000" }} />
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        }
                                    >
                                        {recipe.steps.map((step, stepIndex) => (
                                            <p key={stepIndex}>{step}</p>
                                        ))}
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                    </div>
                ))
            )}
            </div>
        </div>
    );
}

export default Favorites;
