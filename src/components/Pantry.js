import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function Pantry() {
  const [inputValue, setInputValue] = useState('');
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [protein, setProtein] = useState([]);

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
    setInputValue('');
  };

  return (
    <div className='flex flex-col items-center h-screen my-3'>

        <div className='justify-center flex w-full max-w-3xl mb-4'>
            <input
            type="text"
            placeholder="Enter food"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-2 border"
            />

            <div className="px-2">
                <Dropdown>
                <DropdownTrigger>
                    <Button variant="solid">
                    +Add to Pantry Category
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Action event example" onAction={(key) => handleAddToCategory(key)}>
                    <DropdownItem key="fruit">Fruits</DropdownItem>
                    <DropdownItem key="veggie">Vegetables</DropdownItem>
                    <DropdownItem key="protein">Protein</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-b border-blue-500">
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 border-b border-blue-500">
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
            <div className="bg-gray-200 rounded-full h-24 w-24 my-2"></div>
        </div>

    </div>
  );
}

export default Pantry;