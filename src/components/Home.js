import React, { useState } from 'react';
import logo2 from '../img/logo1.png';

function Home() {
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (event.target.value.length > 0) {
            setShowPassword(true);
        } else {
            setShowPassword(false);
        }
    };

    return (
        <div className="pl-48"> {/* Adjust padding left to match the width of your sidebar */}
            <div className="flex justify-between items-start py-8">
                <img src={logo2} alt='Logo' className="w-60 h-60 object-contain mr-2" />
                <div>
                    <h1 className="text-left font-serif text-9xl font-bold mb-4">Pantry Chef</h1>
                    <p className="text-right font-serif text-xl">Where Every Ingredient Counts.</p>
                </div>
                <div className="bg-yellow-400 p-4 rounded-lg shadow-lg max-w-full">
                    <h2 className="text-lg mb-2">Log in</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="username"
                            className="p-2 max-w-full mb-2"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {showPassword && (
                            <input
                                type="password"
                                placeholder="password"
                                className="p-2 max-w-full"
                            />
                        )}
                    </div>
                    {showPassword && (
                        <button className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for images */}
                <div className="bg-yellow-300 p-8 rounded-lg shadow-lg">Pictures of Random Food</div>
                <div className="bg-yellow-300 p-8 rounded-lg shadow-lg">Pictures of Random Food</div>
            </div>
        </div>
    );
}

export default Home;