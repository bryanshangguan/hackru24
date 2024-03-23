import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Pantry from './components/Pantry';
import Recipes from './components/Recipes';
import History from './components/History';
import './App.css';

function App() {
	const [activePage, setActivePage] = useState('home');

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
			<Sidebar onMenuSelect={setActivePage} />
			<main className="content">
				{renderActivePage()}
			</main>
		</NextUIProvider>
	);
}

export default App;