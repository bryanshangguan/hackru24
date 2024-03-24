import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Pantry from './components/Pantry';
import Recipes from './components/Recipes';
import History from './components/History';

function App() {
	const [activePage, setActivePage] = useState('home');
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
	const [apiKey, setOpenAIKey] = useState('');

	const renderActivePage = () => {
		switch (activePage) {
			case 'home':
				return <Home setOpenAIKey={setOpenAIKey} />;
			case 'pantry':
				return <Pantry />;
			case 'recipes':
				return <Recipes apiKey={apiKey} />;
			case 'history':
				return <History />;
			default:
				return <Home setOpenAIKey={setOpenAIKey} />;
		}
	};

	return (
		<NextUIProvider>
			<div className='flex h-screen'>
				<Sidebar
					onMenuSelect={setActivePage}
					isSidebarCollapsed={isSidebarCollapsed}
					setIsSidebarCollapsed={setIsSidebarCollapsed}
				/>
				<main className={`flex-grow overflow-auto transition-margin duration-300 ${isSidebarCollapsed ? 'ml-24' : 'ml-48'}`}>
					{renderActivePage()}
				</main>
			</div>
		</NextUIProvider>
	);
}

export default App;