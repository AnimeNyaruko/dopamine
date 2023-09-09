import { Link } from 'react-router-dom';

export default function Chang3() {
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
