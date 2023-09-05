import Config from '../../assets/JS/Config.js';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 */

function Chang1() {
	return (
		<div className="w-screen h-screen relative flex flex-col items-center text-white text-4xl">
			<p className="font-BSB relative my-12 px-auto text-center">
				Chặng 1: “Nhổ cỏ dại trong khu vườn”
			</p>
			<div className="font-BSB grid gap-5 grid-rows-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-5 lg:w-3/4">
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-1">
						1
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-2">
						2
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-3">
						3
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-4">
						4
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-5">
						5
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-6">
						6
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-7">
						7
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-8">
						8
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-9">
						9
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-10">
						10
					</Link>
				</div>
			</div>
		</div>
	);
}
function Chang2() {
	return (
		<div className="w-screen h-screen relative flex flex-col items-center text-white text-4xl">
			<p className="font-BSB relative my-12 px-auto text-center">
				Chặng 2: “Gieo trồng những hạt giống tốt”
			</p>
			<div className="font-BSB grid gap-5 grid-rows-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-5 lg:w-3/4">
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-11">
						11
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-12">
						12
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-13">
						13
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-14">
						14
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-15">
						15
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-16">
						16
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-17">
						17
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-18">
						18
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-19">
						19
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-20">
						20
					</Link>
				</div>
			</div>
		</div>
	);
}
function Chang3() {
	return (
		<div className="w-screen h-screen relative flex flex-col items-center text-white text-4xl">
			<p className="font-BSB relative my-12 px-auto text-center">
				Chặng 3: “Chăm sóc cho khu vườn”
			</p>
			<div className="font-BSB grid gap-5 grid-rows-5 grid-cols-2 lg:grid-rows-2 lg:grid-cols-5 lg:w-3/4">
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-21">
						21
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-22">
						22
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-23">
						23
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-24">
						24
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-25">
						25
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-26">
						26
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-27">
						27
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-28">
						28
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-29">
						29
					</Link>
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Link
						className="DaysItem w-full h-full py-8 relative rounded-2xl border border-4 border-white border-solid text-center"
						to="Day-30">
						30
					</Link>
				</div>
			</div>
		</div>
	);
}

export default function Stages() {
	const param = useParams();
	const [state, setState] = useState(false);
	const [content, setContent] = useState(null);

	useEffect(() => {
		if (state) {
			Config.forEach((e) => {
				e();
			});
		}
		setState(true);
	}, [state]);
	useEffect(() => {
		switch (param.changID) {
			case '1':
				setContent(Chang1());
				break;
			case '2':
				setContent(Chang2());
				break;
			case '3':
				setContent(Chang3());
				break;
		}
	}, [param.changID]);
	return <>{content}</>;
}
