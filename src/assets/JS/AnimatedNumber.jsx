import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export default function AnimatedNumber({ duration, easing, start, end }) {
	const x1 = easing.x1;
	const x2 = easing.x2;
	duration = duration / 1000;
	let totalframe = duration * 60;
	const timeframe = 1 / totalframe;
	const [time, setTime] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	function bezier(t, initial, p1, p2, completed) {
		return (
			(1 - t) * (1 - t) * (1 - t) * initial +
			3 * (1 - t) * (1 - t) * t * p1 +
			3 * (1 - t) * t * t * p2 +
			t * t * t * completed
		);
	}
	function run() {
		if (time * duration <= duration) {
			setCurrentTime(bezier(time, start, x1 * end, x2 * end, end));
			setTime(time + timeframe);
		}
	}
	useEffect(run, [time, start, end]);

	return <>{`${currentTime.toFixed(2)}%`}</>;
}
AnimatedNumber.propTypes = {
	duration: PropTypes.number,
	easing: PropTypes.object,
	start: PropTypes.number,
	end: PropTypes.number,
};
