import { Link } from 'react-router-dom';

export default function Chang1() {
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
