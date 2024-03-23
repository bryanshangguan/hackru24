import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faBookOpen, faHistory, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../img/logo1.png';

function Sidebar({ onMenuSelect }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleMenuClick = (page) => {
        onMenuSelect(page);
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const getButtonClasses = () => {
        return 'flex items-center justify-center text-center py-2 px-4 w-full text-gray-700 text-xl transition-transform duration-150 transform hover:scale-105';
    };

    const getSidebarClasses = () => {
        return isCollapsed ? 'w-24' : 'w-48';
    };

    return (
        <div className={`fixed top-0 left-0 h-screen ${getSidebarClasses()} bg-blue-accent flex flex-col items-center p-3 transition-width duration-300`}>
            <div className={`w-full mb-8 transition-all duration-300 ${isCollapsed ? 'h-16' : 'h-auto'}`}>
                <img src={logo1} alt='Logo' className={`self-center object-contain ${isCollapsed ? 'scale-75' : 'scale-75'}`} />
            </div>
            <nav className='space-y-2 w-full'>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('home')}>
                    <FontAwesomeIcon icon={faHome} className='mr-2 text-xl' /> {!isCollapsed && 'Home'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('pantry')}>
                    <FontAwesomeIcon icon={faUtensils} className='mr-2 text-xl' /> {!isCollapsed && 'Pantry'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('recipes')}>
                    <FontAwesomeIcon icon={faBookOpen} className='mr-2 text-xl' /> {!isCollapsed && 'Recipes'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('history')}>
                    <FontAwesomeIcon icon={faHistory} className='mr-2 text-xl' /> {!isCollapsed && 'History'}
                </button>
            </nav>
            <div className='mt-auto'>
                <div className='cursor-pointer' onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} className='text-xl' />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;