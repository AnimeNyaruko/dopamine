import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import AnimatedNumber from 'animated-number-react';

function DayFrame(Day) {
	const DayNumber = Day.day;
	const Activities = Day.activities;
	const ActiveAbleElement = Day.ActiveAble;
	const DayObj = useMemo(() => {
		return (
			JSON.parse(window.sessionStorage.getItem(`Day${DayNumber}`)) || {
				CurrentProgress: 0,
				Elements: Array.from({ length: ActiveAbleElement }, (v) => {
					v = 0;
					return v;
				}),
			}
		);
	}, [ActiveAbleElement, DayNumber]);
	const line = useRef(null);
	const [progress, setProgress] = useState(DayObj.CurrentProgress);
	// const [state]

	const handleClick = useCallback(
		(e, index) => {
			const element = e.target;
			const isContain = element.classList.contains('text-slate-400');
			const windowWidth = window.screen.availWidth;
			const lineElement = line.current;
			if (isContain) {
				element.classList.remove('text-slate-400');
				element.classList.add('text-green-400');
				setProgress(progress + 1);
				lineElement.style.width =
					windowWidth - (progress + 1) * (windowWidth / ActiveAbleElement) + 'px';
				DayObj.Elements[index] = 1;
				DayObj.CurrentProgress++;
			} else {
				element.classList.remove('text-green-400');
				element.classList.add('text-slate-400');
				setProgress(progress - 1);
				lineElement.style.width =
					windowWidth - (progress - 1) * (windowWidth / ActiveAbleElement) + 'px';
				DayObj.Elements[index] = 0;
				DayObj.CurrentProgress--;
			}
		},
		[ActiveAbleElement, DayObj.CurrentProgress, DayObj.Elements, progress]
	);
	const ContentElement = (Content, key) => {
		if (Content.canActive) {
			const colorDepc = DayObj.Elements[key] ? 'green' : 'slate';
			return (
				<div
					onClick={(e) => {
						handleClick(e, key);
					}}
					key={key}
					className={`activity-items w-fit cursor-pointer font-medium text-${colorDepc}-400`}>
					{Content.content}
				</div>
			);
		} else {
			return (
				<div key={key} className="activity-items w-fit font-medium font-semibold">
					{Content.content}
				</div>
			);
		}
	};

	useEffect(() => {
		const windowWidth = window.screen.availWidth;
		setTimeout(() => {
			line.current.style.width = windowWidth - progress * (windowWidth / ActiveAbleElement) + 'px';
		}, 500);
	}, []);
	useEffect(() => {
		sessionStorage.setItem(`Day${DayNumber}`, JSON.stringify(DayObj));
	}, [handleClick, DayNumber, DayObj]);

	const HTMLcode = (
		<>
			<div className="relative text-white text-4xl w-screen h-auto">
				<div className="relative left-1/2 -translate-x-1/2 w-2/3 lg:w-1/2 h-1/6 my-4 sm:my-12 flex flex-row justify-between items-center">
					<div className="w-fit h-fit">
						<img className="h-auto w-1/2 lg:w-1/4" src="/image/ảnh chúc mừng.png" alt="" />
					</div>
					<div className=" w-fit h-full flex justify-center items-center">
						<p className="DaysItem font-BSB w-full h-full py-5 sm:py-8 relative rounded-2xl border border-4 border-white border-solid flex justify-center items-center">
							{DayNumber}
						</p>
					</div>
					<div className="w-fit h-fit">
						<img
							className="h-auto w-1/2 lg:w-1/4 float-right scale-x-[-1]"
							src="/image/ảnh chúc mừng.png"
							alt=""
						/>
					</div>
				</div>
				<div className="relative left-1/2 -translate-x-1/2 w-4/5 flex flex-col justify-center items-center my-4">
					<div className="w-fit h-fit font-extrabold text-3xl sm:text-4xl lg:text-6xl">
						Hoạt động
					</div>
					<div id="activities" className="mt-4 text-xl sm:text-2xl lg:text-4xl">
						{Activities.map((e, i) => {
							return ContentElement(e, i);
						})}
					</div>
				</div>
				<br />
			</div>
			<div
				id="progressLine"
				className="fixed -translate-y-full text-white text-4xl h-auto w-screen">
				<div
					id="line"
					className="absolute bg-gradient-to-r from-red to-green-500 h-full w-full"></div>
				<div
					id="mask"
					ref={line}
					className="bg-[var(--bg-color)] absolute h-full w-full left-full -translate-x-full"></div>
				<p className="relative left-1/2 -translate-x-1/2 w-fit text-md z-10">
					<AnimatedNumber
						value={progress * (100 / ActiveAbleElement)}
						duration={500}
						formatValue={(n) => `${Number(n).toFixed(2)}%`}
					/>
				</p>
			</div>
		</>
	);
	return HTMLcode;
}

export default DayFrame;
