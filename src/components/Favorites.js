import React from 'react';
import { Card, CardBody, Accordion, AccordionItem } from '@nextui-org/react';

function Favorites({favorites}) {
    if (favorites == null || favorites.length === 0) {
        return <p>No favorites added yet.</p>;
    }

    return (
        <div className="Favorites-page px-20 space-y-4 mt-4">
            <h2 className="text-3xl font-bold mb-4">Your Favorite Recipes</h2>
            {favorites.map((recipe, index) => (
                <Card key={index}>
                    <CardBody>
                        <Accordion>
                            <AccordionItem title={recipe.name}>
                                {recipe.steps.map((step, stepIndex) => (
                                    <p key={stepIndex}>{step}</p>
                                ))}
                            </AccordionItem>
                        </Accordion>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}

export default Favorites;
