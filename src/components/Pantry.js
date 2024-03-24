import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import logo1 from '../img/logo1.png';

function Pantry() {

    const [inputValue, setInputValue] = useState('');
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [protein, setProtein] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    //add input to category array
    const addToCat = (category) => {
        switch (category) {
        case 'fruit':
            setFruits([...fruits, inputValue]);
            console.log('Fruits:', fruits);
            break;
        case 'veggie':
            setVegetables([...vegetables, inputValue]);
            console.log('Veg:', vegetables);
            break;
        case 'protein':
            setProtein([...protein, inputValue]);
            console.log('Protein:', protein);
            break;
        default:
            break;
        }
        setInputValue('');
    };

    const openModalWithContent = (category) => {
        switch (category) {
            case 'fruit':
                setModalContent(fruits);
                break;
            case 'veggie':
                setModalContent(vegetables);
                break;
            case 'protein':
                setModalContent(protein);
                break;
            default:
                setModalContent([]);
                break;
        }
        setModalOpen(true);
    };

    return (
        <div className='flex flex-col items-center h-screen my-3'>

            <h1 className="font-bold text-5xl my-11">My Pantry</h1>

            <div className='justify-center flex w-full max-w-3xl'>
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
                    <DropdownMenu aria-label="Action event example" onAction={(key) => addToCat(key)}>
                        <DropdownItem key="fruit">Fruits</DropdownItem>
                        <DropdownItem key="veggie">Vegetables</DropdownItem>
                        <DropdownItem key="protein">Protein</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-500 mb-12">
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('fruit')}>
                    <img src={logo1} alt="food" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2>Modal Content</h2>
                        <ul>
                            {modalContent.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <button onClick={() => setModalOpen(false)}>Close Modal</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Pantry;
