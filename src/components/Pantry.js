import React, { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import logo1 from '../img/logo1.png';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

function Pantry() {

    const [inputValue, setInputValue] = useState('');
<<<<<<< HEAD

    const [fruits, setFruits] = useState({});
    const [vegetables, setVegetables] = useState({});
    const [protein, setProtein] = useState({});
    const [dairy, setDairy] = useState({});
    const [carbs, setCarbs] = useState({});
    const [season, setSeason] = useState({});
=======
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [protein, setProtein] = useState([]);
<<<<<<< HEAD
    const [dairy, setDairy] = useState([]);
    const [carbs, setCarbs] = useState([]);
    const [season, setSeason] = useState([]);
>>>>>>> parent of 5525e5f (map attempt)
=======
>>>>>>> parent of b37c9ca (pantry icons and categories)

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);

<<<<<<< HEAD

    //category hash map
    const categoryMap = {
        fruitCat: fruits,
        veggiesCat: vegetables,
        proteinCat: protein,
        dairyCat: dairy,
        carbsCat: carbs,
        seasonCat: season
    };

    // add ingredient to category map and update counts
    const addToCat = (category) => {
        const categoryStateToUpdate = categoryMap[category];
    
        if (categoryStateToUpdate) {
            const ingredient = inputValue.toLowerCase();
            const updatedState = { ...{}, ...categoryStateToUpdate };
    
            if (updatedState.hasOwnProperty(ingredient)) {
                updatedState[ingredient]++;
            } else {
                updatedState[ingredient] = 1;
            }
    
            switch (category) {
                case 'fruitCat':
                    setFruits(updatedState);
                    break;
                case 'veggiesCat':
                    setVegetables(updatedState);
                    break;
                case 'proteinCat':
                    setProtein(updatedState);
                    break;
                case 'dairyCat':
                    setDairy(updatedState);
                    break;
                case 'carbsCat':
                    setCarbs(updatedState);
                    break;
                case 'seasonCat':
                    setSeason(updatedState);
                    break;
                default:
                    break;
            }
=======
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
>>>>>>> parent of 5525e5f (map attempt)
        }
        setInputValue('');
    };

<<<<<<< HEAD
    const openModalWithContent = (categoryKey) => {
        const categoryState = categoryMap[categoryKey];
        console.log('categoryKey:', categoryKey);
        console.log('categoryState:', categoryState);
    
        if (categoryState) {
            const categoryKeys = Object.keys(categoryState);
            console.log('categoryKeys:', categoryKeys);
            setModalContent(categoryKeys);
            setModalOpen(true);
        } else {
            console.error(`Category "${categoryKey}" does not exist in the categoryMap.`);
=======
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
>>>>>>> parent of 5525e5f (map attempt)
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
<<<<<<< HEAD
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('fruitCat')}>
                    <img src={fruitIcon} alt="fruit" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('veggiesCat')}>
                    <img src={veggiesIcon} alt="veggies" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('proteinCat')}>
=======
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('fruit')}>
<<<<<<< HEAD
                    <img src={fruitIcon} alt="fruit" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('veggies')}>
                    <img src={veggiesIcon} alt="veggies" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('protein')}>
>>>>>>> parent of 5525e5f (map attempt)
                    <img src={proteinIcon} alt="protein" className="object-cover rounded-full h-full w-full" />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-500 mb-12">
<<<<<<< HEAD
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('dairyCat')}>
                    <img src={dairyIcon} alt="dairy" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('carbsCat')}>
                    <img src={carbsIcon} alt="carbs" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('seasonCat')}>
=======
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('dairy')}>
                    <img src={dairyIcon} alt="dairy" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('carbs')}>
                    <img src={carbsIcon} alt="carbs" className="object-cover rounded-full h-full w-full" />
                </button>
                <button className="bg-gray-200 rounded-full h-64 w-64 mt-12 my-2 relative" onClick={() => openModalWithContent('season')}>
>>>>>>> parent of 5525e5f (map attempt)
                    <img src={seasonIcon} alt="season" className="object-cover rounded-full h-full w-full" />
=======
                    <img src={logo1} alt="food" className="object-cover rounded-full h-full w-full" />
>>>>>>> parent of b37c9ca (pantry icons and categories)
                </button>
            </div>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <ul>
                            {modalContent.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <button onClick={() => setModalOpen(false)}>Close Modal</button>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>
    );
}

export default Pantry;
