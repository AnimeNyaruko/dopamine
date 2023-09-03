import { Route, Routes } from 'react-router-dom';
import Home from './Router/Home.jsx';
import Start from './Router/Start.jsx';

/**
 * TODO: Need to add "Day" Component for every "Days" links
 */

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Start" element={<Start />} />
			{/* <Route path="/Start/Day/:id" element={<Day />} /> */}
		</Routes>
	);
}
