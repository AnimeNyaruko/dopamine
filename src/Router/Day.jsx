import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DaysItemConfig, progressConfig } from '../assets/JS/Config.js';
import DayFrame from './Days/DayFrameworkl.jsx';
import Day30 from './Days/DayFrameworkForDay30.jsx';
import DayFrameSpecial from './Days/DayFrameworkSpecial.jsx';
import DayList from './Days/DayList.jsx';

export default function Day() {
	const navigate = useNavigate();
	const param = useParams();
	const dayNumber = parseInt(param.dayID.split('-')[1]);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state) {
			progressConfig();
			DaysItemConfig();
			if (window.sessionStorage.getItem('isReload') == 'false') {
				window.sessionStorage.setItem('isReload', true);
				navigate(0);
			}
		}
		setState(true);
	}, [state]);
	if (dayNumber < 30 && dayNumber % 10 == 0) return DayFrameSpecial(DayList[dayNumber - 1]);
	else if (dayNumber == 30) return Day30(DayList[dayNumber - 1]);
	return DayFrame(DayList[dayNumber - 1]);
}

/**
 */
