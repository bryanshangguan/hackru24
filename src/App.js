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

	const renderActivePage = () => {
		switch (activePage) {
			case 'home':
				return <Home />;
			case 'pantry':
				return <Pantry />;
			case 'recipes':
				return <Recipes />;
			case 'history':
				return <History />;
			default:
				return <Home />;
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