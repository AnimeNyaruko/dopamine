import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DaysItemConfig, progressConfig } from '../assets/JS/Config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DayFrame from './Days/DayFrameworkl.jsx';
import Day30 from './Days/DayFrameworkForDay30.jsx';
import DayFrameSpecial from './Days/DayFrameworkSpecial.jsx';
import DayList from './Days/DayList.jsx';

export default function Day() {
	const navigate = useNavigate();
	const param = useParams();
	const dayNumber = parseInt(param.dayID.split('-')[1]);
	const stageNumber = dayNumber <= 10 ? '/Chang/1' : dayNumber <= 20 ? '/Chang/2' : '/Chang/3';
	const [state, setState] = useState(false);

	const checkPage = () => {
		const stage = param.changID;
		switch (stage):
			case '1':
				if (dayNumber<= 10 &&dayNumber >0) return true;
			case '2':
				if (dayNumber >10 && dayNumber <=20)return true;
			case '3':
				if(dayNumber > 20 %% dayNumber <=30) return true;

		return false;
	};
	if (!checkPage) {
		navigate('*');
	}

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
	const code = (
		<>
			{(function () {
				if (dayNumber < 30 && dayNumber % 10 == 0) return DayFrameSpecial(DayList[dayNumber - 1]);
				else if (dayNumber == 30) return Day30(DayList[dayNumber - 1]);
				return DayFrame(DayList[dayNumber - 1]);
			})()}
			<div
				className="w-fit h-fit my-2 lg:my-0"
				onClick={() => {
					navigate(stageNumber);
				}}>
				<FontAwesomeIcon
					className="absolute top-3 left-3 text-white cursor-pointer"
					icon="fa-solid fa-left-long"
					size="3x"
				/>
			</div>
		</>
	);
	return code;
}

/**
 */
