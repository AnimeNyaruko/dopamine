import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DaysItemConfig, progressConfig } from '../assets/JS/Config.js';
import DayFrame from './Days/DayFrameworkl.jsx';
import DayFrameSpecial from './Days/DayFrameworkSpecial.jsx';
import DayList from './Days/DayList.jsx';

export default function Day() {
	const param = useParams();
	const dayNumber = parseInt(param.dayID.split('-')[1]);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state) {
			progressConfig();
			DaysItemConfig();
		}
		setState(true);
	}, [state]);
	if (dayNumber % 10 == 0) return DayFrameSpecial(DayList[dayNumber - 1]);
	return DayFrame(DayList[dayNumber - 1]);
}

/**
 */
