import { Route, Routes } from 'react-router-dom';
import Home from './Router/Home.jsx';
import Start from './Router/Start.jsx';
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Start" element={<Start />} />
		</Routes>
	);
}
