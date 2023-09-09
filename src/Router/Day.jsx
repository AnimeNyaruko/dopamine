import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Config from '../assets/JS/Config.js';
import DayFrame from './Days/DayFrameworkl.jsx';
import DayList from './Days/DayList.js';

export default function Day() {
	const param = useParams();
	const dayNumber = parseInt(param.dayID[param.dayID.length - 1]);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state) {
			Config.forEach((e) => {
				e();
			});
		}
		setState(true);
	}, [state]);
	return DayFrame(DayList[dayNumber - 1]);
}

/**
 */
