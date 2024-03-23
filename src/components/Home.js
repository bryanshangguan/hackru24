import React from 'react';
import logo1 from '../img/logo1.png';

function Home() {
    return (
        <div className='flex-1 flex flex-col items-center justify-center'>
            <img src={logo1} alt="Pantry Chef Logo" className="mb-6" />
            <h1 className="text-4xl font-bold mb-2">Pantry Chef</h1>
            <p className="text-xl mb-12">Where Every Ingredient Counts.</p>
            <div className="bg-yellow-400 p-10 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Log in</h2>
                <form className="flex flex-col">
                    <input type="text" placeholder="username" className="mb-4 p-2" />
                    <input type="password" placeholder="password" className="mb-4 p-2" />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
