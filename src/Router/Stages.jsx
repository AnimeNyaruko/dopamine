import { DaysItemConfig } from '../assets/JS/Config.js';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chang1 from './Stage/Stage1.jsx';
import Chang2 from './Stage/Stage2.jsx';
import Chang3 from './Stage/Stage3.jsx';

/**
 */

const ChangList = [Chang1(), Chang2(), Chang3()];

export default function Stages() {
	const param = useParams();
	const ChangNumber = Number(param.changID);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state) {
			window.sessionStorage.setItem('isReload', false);
			DaysItemConfig();
		}
		setState(true);
	}, [state]);
	return ChangList[ChangNumber - 1];
}
