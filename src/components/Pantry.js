import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import fruitIcon from '../img/pantryIcons/fruitIcon.png';
import veggiesIcon from '../img/pantryIcons/veggiesIcon.png';
import proteinIcon from '../img/pantryIcons/proteinIcon.png';
import dairyIcon from '../img/pantryIcons/dairyIcon.png';
import carbsIcon from '../img/pantryIcons/carbsIcon.png';
import seasonIcon from '../img/pantryIcons/seasonIcon.png';
import removeIcon from '../img/pantryIcons/removeIcon.png';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

function Pantry({ updateIngredients }) {
    const [inputValue, setInputValue] = useState('');
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [protein, setProtein] = useState([]);
    const [dairy, setDairy] = useState([]);
    const [carbs, setCarbs] = useState([]);
    const [season, setSeason] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    const addToCat = (category) => {
        switch (category) {
            case 'fruit':
                setFruits([...fruits, inputValue]);
                break;
            case 'veggies':
                setVegetables([...vegetables, inputValue]);
                break;
            case 'protein':
                setProtein([...protein, inputValue]);
                break;
            case 'dairy':
                setDairy([...fruits, inputValue]);
                break;
            case 'carbs':
                setCarbs([...carbs, inputValue]);
                break;
            case 'season':
                setSeason([...season, inputValue]);
                break;
            default:
                break;
        }
        setInputValue('');
    };

    const openModalWithContent = (category) => {
        setCurrentCategory(category);
        switch (category) {
            case 'fruit':
                setModalContent(fruits);
                break;
            case 'veggies':
                setModalContent(vegetables);
                break;
            case 'protein':
                setModalContent(protein);
                break;
            case 'dairy':
                setModalContent(dairy);
                break;
            case 'carbs':
                setModalContent(carbs);
                break;
            case 'season':
                setModalContent(season);
                break;
            default:
                setModalContent([]);
                break;
        }
        updateIngredients([...fruits, ...vegetables, ...protein, ...dairy, ...carbs, ...season]);
        setModalOpen(true);
    };

    const handleRemoveItem = (item) => {
        switch (currentCategory) {
            case 'fruit':
                setFruits(fruits.filter(fruit => fruit !== item));
                break;
            case 'veggies':
                setVegetables(vegetables.filter(vegetable => vegetable !== item));
                break;
            case 'protein':
                setProtein(protein.filter(proteinItem => proteinItem !== item));
                break;
            case 'dairy':
                setDairy(dairy.filter(dairyItem => dairyItem !== item));
                break;
            case 'carbs':
                setCarbs(carbs.filter(carb => carb !== item));
                break;
            case 'season':
                setSeason(season.filter(seasonItem => seasonItem !== item));
                break;
            default:
                break;
        }
        updateIngredients([...fruits, ...vegetables, ...protein, ...dairy, ...carbs, ...season]);
        setModalOpen(false);
    };

    return (
        <div className='flex flex-col items-center h-screen my-3'>

            <h1 className="font-bold font-serif text-5xl my-11">My Pantry</h1>

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
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                                +Add to Pantry Category
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" onAction={(key) => addToCat(key)}>
                            <DropdownItem key="fruit">Fruits</DropdownItem>
                            <DropdownItem key="veggies">Vegetables</DropdownItem>
                            <DropdownItem key="protein">Protein</DropdownItem>
                            <DropdownItem key="dairy">Dairy</DropdownItem>
                            <DropdownItem key="carbs">Carbs</DropdownItem>
                            <DropdownItem key="season">Seasoning</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-accent mb-12">
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('fruit')}>
                    <img src={fruitIcon} alt="fruit" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('veggies')}>
                    <img src={veggiesIcon} alt="veggies" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('protein')}>
                    <img src={proteinIcon} alt="protein" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-accent mb-12">
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('dairy')}>
                    <img src={dairyIcon} alt="dairy" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('carbs')}>
                    <img src={carbsIcon} alt="carbs" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('season')}>
                    <img src={seasonIcon} alt="season" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalContent>
                    {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{currentCategory}</ModalHeader>
                        <ModalBody>
                        <ul>
                            {modalContent.map((item, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span>{item}</span>
                                <button className="h-4 w-4" onClick={() => handleRemoveItem(item)}>
                                <img src={removeIcon} alt="remove"/>
                                </button>
                            </li>
                            ))}
                        </ul>
                        </ModalBody>
                    </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    );
}

export default Pantry;
