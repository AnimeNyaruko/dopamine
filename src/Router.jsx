import { Route, Routes } from 'react-router-dom';
import Home from './Router/Home.jsx';
import Start from './Router/Start.jsx';
import Stages from './Router/Stages.jsx';
import Day from './Router/Day.jsx';
import importLib from './assets/JS/importLib.js';
import { useEffect, useState } from 'react';

export default function App() {
	const [state, setState] = useState(false);
	useEffect(() => {
		if (state) importLib();
		setState(true);
	}, [state]);
	return (
		<Routes>
			<Route index path="/" element={<Home />} />
			<Route path="/Chang" element={<Start />} />
			<Route path="Chang/:changID" element={<Stages />} />
			<Route path="Chang/:changID/:dayID" element={<Day />} />
		</Routes>
	);
}
