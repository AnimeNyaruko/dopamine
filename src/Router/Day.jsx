import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Config from '../assets/JS/Config.js';

export default function Day() {
	const [state, setState] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (state) {
			Config.forEach((e) => {
				e();
			});
		}
		setState(true);
	}, [state]);
	return <></>;
}

/**
 * TODO: Build the progress bar.
 * TODO: Add effects for each activities to 2 states: "not done" and "done"
 */
