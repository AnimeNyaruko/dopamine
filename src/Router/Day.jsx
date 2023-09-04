import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Config from '../assets/JS/Config.js';

export default function Day() {
	const param = useParams();
	console.log(param);

	const [state, setState] = useState(false);
	useEffect(() => {
		if (state) {
			Config.forEach((e) => {
				e();
			});
		}
		setState(true);
	}, [state]);
	return (
		<>
			<div className="text-white text-4xl w-screen h-auto">
				<div className="relative left-1/2 -translate-x-1/2 w-2/3 lg:w-1/2 h-1/6 my-8 sm:my-12 flex flex-col lg:flex-row justify-between items-center">
					<div className=" w-fit h-full flex justify-center items-center">
						<p className="DaysItem font-BSB w-full h-full py-5 sm:py-8 relative rounded-2xl border border-4 border-white border-solid flex justify-center items-center">
							1
						</p>
					</div>
					<div className=" w-fit h-full flex justify-center items-center mt-6 lg:m-0 text-center text-xl sm:text-2xl lg:text-4xl">
						<p className="font-BSB flex justify-center items-center">
							Chặng 1: “Nhổ cỏ dại trong khu vườn”
						</p>
					</div>
				</div>
				<div className="relative left-1/2 -translate-x-1/2 w-4/5"></div>
			</div>
		</>
	);
}
