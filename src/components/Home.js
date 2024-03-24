import React, { useState } from 'react';
import logo2 from '../img/logo1.png';

function Home({ setOpenAIKey }) {
    const [apiKey, setApiKey] = useState('');

    const handleApiKeyChange = (event) => {
        setApiKey(event.target.value);
        setOpenAIKey(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="px-6">
            <div className="flex justify-between items-start py-8">
                <img src={logo2} alt='Logo' className="w-60 h-60 object-contain mr-2" />
                <div>
                    <h1 className="text-left font-serif text-9xl font-bold mb-4">Pantry Chef</h1>
                    <p className="text-right font-serif text-3xl">Where Every Ingredient Counts.</p>
                </div>
                <div className="bg-yellow-400 p-4 rounded-lg shadow-lg w-64">
                    <h2 className="text-lg mb-2">API Key</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your API key"
                                className="p-2 w-full mb-2"
                                value={apiKey}
                                onChange={handleApiKeyChange}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
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