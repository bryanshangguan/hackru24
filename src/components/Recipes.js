import React, { useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';

function Recipes({ recipes }) {
    const [recipesList, setRecipesList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetRecipes = async () => {
        setLoading(true);

        const fakeApiResponse = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

        setRecipesList(fakeApiResponse);
        setLoading(false);
    };

    return (
        <div className='Recipes-page'>
            <h1>Recipes page</h1>
            <Button auto flat color="success" onClick={handleGetRecipes} disabled={loading}>
                {loading ? 'Loading...' : 'Get Recipes'}
            </Button>
            <div className='recipes-list'>
                {recipesList.map((recipe, index) => (
                    <Card key={index}>
                        <CardBody>
                            <h1>{recipe}</h1>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Recipes;