import React, { useState, useEffect } from 'react';
import { Button, Input, Checkbox } from '@nextui-org/react';
import logo2 from '../img/logo2.png';

function Home({ setOpenAIKey }) {
    const [apiKey, setApiKey] = useState('');
    const [isValidKey, setIsValidKey] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [saveKey, setSaveKey] = useState(false);

    useEffect(() => {
        const storedApiKey = localStorage.getItem('apiKey');
        if (storedApiKey) {
            setApiKey(storedApiKey);
            setOpenAIKey(storedApiKey);
        }
    }, [setOpenAIKey]);

    const handleApiKeyChange = (event) => {
        setApiKey(event.target.value);
        setSubmitted(false);
    };

    const handleSaveKeyChange = (event) => {
        setSaveKey(event.target.checked);
    };

    const validateApiKey = async (key) => {
        try {
            const response = await fetch('https://api.openai.com/v1/models', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${key}`,
                },
            });

            if (response.status === 200) {
                setIsValidKey(true);
                if (saveKey) {
                    localStorage.setItem('apiKey', key);
                }
                return true;
            } else {
                setIsValidKey(false);
                return false;
            }
        } catch (error) {
            console.error('Error validating OpenAI API key:', error);
            setIsValidKey(false);
            return false;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = await validateApiKey(apiKey);
        if (isValid) {
            setOpenAIKey(apiKey);
        }
        setSubmitted(true);
    };

    return (
        <div className='px-6'>
            <div className='flex justify-between items-start py-8 border-b-8 border-yellow-400 mb-4'>
                <div className="flex items-center">
                    <img src={logo2} alt='Logo' className='w-60 h-60 object-contain mr-2' />
                    <div>
                        <h1 className='text-left font-serif text-8xl font-bold mb-4'>Pantry Chef</h1>
                        <p className='text-right font-serif text-3xl'>Where Every Ingredient Counts.</p>
                    </div>
                </div>
                <div className='border-yellow-400 border-2 p-4 rounded-lg shadow-lg w-64'>
                    <h2 className='text-lg mb-2'>API Key</h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            variant='bordered'
                            placeholder='Enter your API key'
                            value={apiKey}
                            onChange={handleApiKeyChange}
                        />
                        <Checkbox checked={saveKey} onChange={handleSaveKeyChange} className='mt-1 mb-2'>
                            Save key (locally)
                        </Checkbox>
                        <Button type='submit' color='primary' className='w-full'>Submit</Button>
                        {!isValidKey && submitted && <p className='text-red-500'>Invalid API key. Please try again.</p>}
                        {isValidKey && submitted && <p className='text-green-500'>Valid API key detected!</p>}
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <p className="font-serif">Welcome to Pantry Chef, where we believe everyone has the potential to be their own chef. Our mission is to promote sustainability and help you make the most of the ingredients you already have in your pantry. By embracing the art of cooking at home, you not only become more self-reliant but also contribute to a healthier planet by reducing food waste and minimizing the need for packaged goods.</p>
                <p className="font-serif">At Pantry Chef, we encourage you to explore the depths of your kitchen cabinets and discover the hidden treasures within. Our platform offers creative recipes that adapt to what you have on hand, transforming overlooked items into culinary delights. Whether you have a handful of vegetables, some grains, or just a few herbs and spices, we'll show you how to combine these elements into delicious and nutritious meals.</p>
                <p className="font-serif">We're not just about cooking; we're about creating a culture of mindful consumption and appreciation for the food we have. By planning meals around existing ingredients, you'll learn to shop smarter, reducing unnecessary purchases and minimizing food waste. This approach not only saves you money but also lessens the environmental impact of your meals.</p>
            </div>
        </div>
    );
}

export default Home;