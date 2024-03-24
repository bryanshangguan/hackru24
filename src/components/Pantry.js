import React, { useState } from 'react';
import { Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import fruitIcon from '../img/pantryIcons/fruitIcon.png';
import veggiesIcon from '../img/pantryIcons/veggiesIcon.png';
import proteinIcon from '../img/pantryIcons/proteinIcon.png';
import dairyIcon from '../img/pantryIcons/dairyIcon.png';
import carbsIcon from '../img/pantryIcons/carbsIcon.png';
import seasonIcon from '../img/pantryIcons/seasonIcon.png';
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

function Pantry() {
    const [inputValue, setInputValue] = useState('');
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [protein, setProtein] = useState([]);
    const [dairy, setDairy] = useState([]);
    const [carbs, setCarbs] = useState([]);
    const [season, setSeason] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);

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
            case 'dairy':
                setDairy([...fruits, inputValue]);
                console.log('Dairy:', dairy);
                break;
            case 'carbs':
                setCarbs([...carbs, inputValue]);
                console.log('Carbs:', carbs);
                break;
            case 'season':
                setSeason([...season, inputValue]);
                console.log('Seasonings:', season);
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
        setModalOpen(true);
    };

    return (
        <div className='flex flex-col items-center h-screen my-3'>

            <h1 className="font-bold text-5xl my-11">My Pantry</h1>

            <div className='justify-center flex w-full max-w-3xl'>
                <Input
                    type='text'
                    variant='bordered'
                    placeholder="Enter food"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='w-1/2'
                    radius='sm'
                />

                <div className="px-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant='solid' radius='sm' color='success'>
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
            <div className="grid grid-cols-3 gap-36 border-b-8 border-blue-500 mb-12">
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
