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
        return 'flex items-center text-left py-2 px-4 w-full text-gray-700 hover:bg-blue-hover hover:text-white';
    };

    const getSidebarClasses = () => {
        return isCollapsed ? 'w-20' : 'w-40';
    };

    return (
        <div className={`fixed top-0 left-0 h-screen ${getSidebarClasses()} bg-blue-accent flex flex-col justify-between p-3 transition-width duration-300`}>
            <div>
                <div className={`w-full mb-8 transition-all duration-300 ${isCollapsed ? 'h-16' : 'h-auto'}`}>
                    <img src={logo1} alt='Logo' className={`w-full h-auto object-contain ${isCollapsed ? 'scale-75' : 'scale-100'}`} />
                </div>
                <nav className='space-y-2'>
                    <button className={getButtonClasses()} onClick={() => handleMenuClick('home')}>
                        <FontAwesomeIcon icon={faHome} className='text-lg text-center' /> {!isCollapsed && 'Home'}
                    </button>
                    <button className={getButtonClasses()} onClick={() => handleMenuClick('pantry')}>
                        <FontAwesomeIcon icon={faUtensils} className='mr-2 text-lg' /> {!isCollapsed && 'Pantry'}
                    </button>
                    <button className={getButtonClasses()} onClick={() => handleMenuClick('recipes')}>
                        <FontAwesomeIcon icon={faBookOpen} className='mr-2 text-lg' /> {!isCollapsed && 'Recipes'}
                    </button>
                    <button className={getButtonClasses()} onClick={() => handleMenuClick('history')}>
                        <FontAwesomeIcon icon={faHistory} className='mr-2 text-lg' /> {!isCollapsed && 'History'}
                    </button>
                </nav>
            </div>
            <div className='cursor-pointer' onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} />
            </div>
        </div>
    );
}

export default Sidebar;