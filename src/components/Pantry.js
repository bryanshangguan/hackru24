import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import fruitIcon from '../img/pantryIcons/fruitIcon.png';
import veggiesIcon from '../img/pantryIcons/veggiesIcon.png';
import proteinIcon from '../img/pantryIcons/proteinIcon.png';
import dairyIcon from '../img/pantryIcons/dairyIcon.png';
import carbsIcon from '../img/pantryIcons/carbsIcon.png';
import seasonIcon from '../img/pantryIcons/seasonIcon.png';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

function Pantry() {

    const [inputValue, setInputValue] = useState('');

    const fruits = {};
    const vegetables = {};
    const protein = {};
    const dairy = {};
    const carbs = {};
    const season = {};

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);


    //category hash map
    const categoryMap = {
        fruitCat: {fruits},
        veggiesCat: {vegetables},
        proteinCat: {protein},
        dairyCat: {dairy},
        carbsCat: {carbs},
        seasonCat: {season}
    };

    // add ingredient to category map and update counts
    const addToCat = (category) => {
        const categoryStateToUpdate = categoryMap[category];
    
        if (categoryStateToUpdate) {
            const ingredient = inputValue.toLowerCase();
        
            // Check if the ingredient already exists in the category
            if (categoryStateToUpdate.hasOwnProperty(ingredient)) {
                categoryStateToUpdate[ingredient]++;
            } else {
                categoryStateToUpdate[ingredient] = 1;
            }
        }
        setInputValue('');
    };
    

    const openModalWithContent = (category) => {
        const categoryState = categoryMap[category];
        if (categoryState) {
            const categoryKeys = Object.keys(categoryState);
            setModalContent(categoryKeys);
            setModalOpen(true);
        }
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
                        <DropdownItem key="dairy">Dairy</DropdownItem>
                        <DropdownItem key="carbs">Carbs</DropdownItem>
                        <DropdownItem key="season">Seasoning</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-500 mb-12">
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(fruits)}>
                    <img src={fruitIcon} alt="fruit" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(vegetables)}>
                    <img src={veggiesIcon} alt="veggies" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(protein)}>
                    <img src={proteinIcon} alt="protein" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-500 mb-12">
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(dairy)}>
                    <img src={dairyIcon} alt="dairy" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(carbs)}>
                    <img src={carbsIcon} alt="carbs" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent(season)}>
                    <img src={seasonIcon} alt="season" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <ul>
                                    {modalContent.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <button onClick={onClose}>Close Modal</button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    );
}

export default Pantry;
