import { useRef } from 'react';
// import { Link } from 'react-router-dom';

function DayFrame(DayNumber, Stage, Activities) {
	const ref = useRef([]);
	const addRef = (e) => ref.current.push(e);
	const ActivitiesFrame = (Content) => {
		return (
			<p ref={addRef} className="activity-items cursor-pointer font-medium text-slate-400">
				{Content}
			</p>
		);
	};

	const HTMLcode = (
		<div className="text-white text-4xl w-screen h-auto">
			<div className="relative left-1/2 -translate-x-1/2 w-2/3 lg:w-1/2 h-1/6 my-4 sm:my-12 flex flex-col lg:flex-row justify-between items-center">
				<div className=" w-fit h-full flex justify-center items-center">
					<p className="DaysItem font-BSB w-full h-full py-5 sm:py-8 relative rounded-2xl border border-4 border-white border-solid flex justify-center items-center">
						{DayNumber}
					</p>
				</div>
				<div className=" w-fit h-full flex justify-center items-center mt-6 lg:m-0 text-center text-xl sm:text-2xl lg:text-4xl">
					<p className="font-BSB flex justify-center items-center">{Stage}</p>
				</div>
			</div>
			<div className="relative left-1/2 -translate-x-1/2 w-4/5 flex flex-col justify-center items-center my-4">
				<div className="w-fit h-fit font-extrabold text-3xl sm:text-4xl lg:text-6xl">Hoạt động</div>
				<div id="activities" className="my-4 text-xl sm:text-2xl lg:text-4xl">
					<p
						ref={addRef}
						className="activity-items cursor-pointer font-medium text-slate-400">{`1. Thành lập mục tiêu (chỉ dùng mạng xã hội 30 phút/ ngày)`}</p>
					<p
						ref={addRef}
						className="activity-items cursor-pointer font-medium text-slate-400">{`2. Xác định những nguồn cung cấp dopamine mà bạn muốn giảm  (Mạng xã hội, game, đồ ngọt,...)`}</p>
					<p
						ref={addRef}
						className="activity-items cursor-pointer font-medium text-slate-400">{`3. Tìm sở thích lành mạnh để thay thế( đọc sách, tập thể dục, đan len, làm vườn, ...`}</p>
					<p
						ref={addRef}
						className="activity-items cursor-pointer font-medium text-slate-400">{`4. Ghi những điều trên vào giấy`}</p>
				</div>
			</div>
			<div id="progressLine" className="absolute h-fit w-fit">
				<p className="w-fit text-md"> {`${progress}%`}</p>
			</div>
		</div>
	);
}

function Day1(progress) {
	const ref = useRef([]);

	return {
		code: HTMLcode,
		ref: ref,
	};
}

function Day2() {}

export { Day1 };
