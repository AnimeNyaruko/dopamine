import ClickEffect from '../assets/JS/clickEffect.jsx';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Start() {
	const clickEffect = useRef([]);
	const counter = (e) => clickEffect.current.push(e);
	const [state, setState] = useState(false);
	useEffect(() => {
		if (state) {
			ClickEffect(clickEffect.current);
		}
		setState(true);
	}, [state]);
	return (
		<div className="w-screen h-screen text-white flex justify-center items-center">
			<div className=" w-2/3 lg:w-1/2 h-1/2 flex flex-col justify-between items-center font-BSB text-xl sm:text-2xl lg:text-4xl">
				<Link
					ref={state ? counter : null}
					className="opening-effect cursor-pointer click-effect"
					to="/Chang/1">
					Chặng 1: “Nhổ cỏ dại trong khu vườn”
				</Link>
				<Link
					ref={state ? counter : null}
					className="opening-effect cursor-pointer click-effect"
					to="/Chang/2">
					Chặng 2: “Gieo trồng những hạt giống tốt”
				</Link>
				<Link
					ref={state ? counter : null}
					className="opening-effect cursor-pointer click-effect"
					to="/Chang/3">
					Chặng 3: “Chăm sóc cho khu vườn”
				</Link>
				<i className="click-effect-object absolute font-2xl section fa-solid fa-forward"></i>
			</div>
		</div>
	);
}
