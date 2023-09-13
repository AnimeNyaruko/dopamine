import { DaysItemConfig } from '../assets/JS/Config.js';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chang1 from './Stage/Stage1.jsx';
import Chang2 from './Stage/Stage2.jsx';
import Chang3 from './Stage/Stage3.jsx';

/**
 */

const ChangList = [Chang1(), Chang2(), Chang3()];

export default function Stages() {
	const param = useParams();
	const navigate = useNavigate();
	const ChangNumber = Number(param.changID);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (state) {
			window.sessionStorage.setItem('isReload', false);
			DaysItemConfig();
		}
		setState(true);
	}, [state]);
	const code = (
		<>
			{ChangList[ChangNumber - 1]}
			<div
				className="w-fit h-fit py-2 lg:py-0"
				onClick={() => {
					navigate('/Chang');
				}}>
				<FontAwesomeIcon
					className="absolute top-1.5 lg:top-3 left-3 text-white cursor-pointer"
					icon="fa-solid fa-left-long"
					size="3x"
				/>
			</div>
		</>
	);
	return code;
}
