import { Link } from 'react-router-dom';

export default function Chang2() {
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
