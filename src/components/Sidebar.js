import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faBookOpen, faStar, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../img/logo1.png';

function Sidebar({ onMenuSelect, isSidebarCollapsed, setIsSidebarCollapsed }) {
    const handleMenuClick = (page) => {
        onMenuSelect(page);
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const getButtonClasses = () => {
        return 'flex items-center justify-center text-center py-2 px-4 w-full text-gray-700 text-xl transition-transform duration-150 transform hover:scale-105';
    };

    const getSidebarClasses = () => {
        return isSidebarCollapsed ? 'w-24' : 'w-48';
    };

    return (
        <div className={`fixed top-0 left-0 h-screen ${getSidebarClasses()} bg-blue-accent flex flex-col items-center p-3 transition-width duration-300 border-r-2 border-gray-200 shadow-r-md`}>
            <div className={`w-full mb-8 transition-all duration-300 ${isSidebarCollapsed ? 'h-16' : 'h-auto'}`}>
                <img src={logo1} alt='Logo' className={`self-center object-contain ${isSidebarCollapsed ? 'scale-75' : 'scale-100'}`} />
            </div>
            <nav className='space-y-2 w-full'>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('home')}>
                    <FontAwesomeIcon icon={faHome} className='mr-2 text-xl' /> {!isSidebarCollapsed && 'Home'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('pantry')}>
                    <FontAwesomeIcon icon={faUtensils} className='mr-2 text-xl' /> {!isSidebarCollapsed && 'Pantry'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('recipes')}>
                    <FontAwesomeIcon icon={faBookOpen} className='mr-2 text-xl' /> {!isSidebarCollapsed && 'Recipes'}
                </button>
                <button className={getButtonClasses()} onClick={() => handleMenuClick('favorites')}>
                    <FontAwesomeIcon icon={faStar} className='mr-2 text-xl' /> {!isSidebarCollapsed && 'favorites'}
                </button>
            </nav>
            <div className='mt-auto'>
                <div className='cursor-pointer' onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isSidebarCollapsed ? faArrowRight : faArrowLeft} className='text-xl' />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;