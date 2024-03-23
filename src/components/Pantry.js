import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function Pantry() {
    // State for input value and arrays corresponding to each dropdown item key
    const [inputValue, setInputValue] = useState('');
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [protein, setProtein] = useState([]);

    // Function to handle adding input value to the corresponding array
    const handleAddToCategory = (category) => {
        switch (category) {
            case 'fruit':
                setFruits([...fruits, inputValue]);
                break;
            case 'veggie':
                setVegetables([...vegetables, inputValue]);
                break;
            case 'protein':
                setProtein([...protein, inputValue]);
                break;
            default:
                break;
        }
        // Reset input value after adding to array
        setInputValue('');
    };

    return (
        <div className='flex ml-6'>
            <input
                type="text"
                placeholder="Enter food"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Dropdown>
                <DropdownTrigger>
                    <Button className="bg-yellow-400 text-white px-4 py-2 rounded" variant="solid">+Add to Pantry Category</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Action event example" onAction={(key) => handleAddToCategory(key)}>
                    <DropdownItem key="fruit">Fruits</DropdownItem>
                    <DropdownItem key="veggie">Vegetables</DropdownItem>
                    <DropdownItem key="protein">Protein</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default Pantry;
