import { Route, Routes } from 'react-router-dom';
import Home from './Router/Home.jsx';
import Start from './Router/Start.jsx';
import Stages from './Router/Stages.jsx';
import Day from './Router/Day.jsx';
import importLib from './assets/JS/importLib.js';
import Error from './Router/ErrorPage.jsx';
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
			<Route exact path="/Chang" element={<Start />} />
			<Route exact path="Chang/:changID" element={<Stages />} />
			<Route exact path="Chang/:changID/:dayID" element={<Day />} />
			<Route exact path="*" element={<Error />} />
		</Routes>
	);
}
