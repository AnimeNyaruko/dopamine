export default function run() {
	const scrollOffset = 100;
	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

	const elementInView = (el, offSet = 0, isHigher = true) => {
		const elementTop = el.getBoundingClientRect().top;
		const AdditionalValue = isHigher ? 1 : -1;
		return (
			elementTop <=
			(window.innerHeight || document.documentElement.clientHeight) + offSet * AdditionalValue
		);
	};

	const elementOutofView = (el, offSet = 0, isHigher = true) => {
		const elementTop = el.getBoundingClientRect().top;
		const AdditionalValue = isHigher ? 1 : -1;
		return (
			elementTop >
			(window.innerHeight || document.documentElement.clientHeight) + offSet * AdditionalValue
		);
	};

	const scrollElements = document.querySelectorAll('.scroll-animation');

	const scrollHandler = () => {
		scrollElements.forEach((e) => {
			if (elementInView(e, scrollOffset, false)) e.classList.add('scroll-animation-scrolled');
			else if (elementOutofView(e, scrollOffset, false))
				e.classList.remove('scroll-animation-scrolled');
		});
	};

	let throttleCheck = false;
	const throttle = (callback, time) => {
		if (throttleCheck) return;

		throttleCheck = true;
		setTimeout(() => {
			callback();
			throttleCheck = false;
		}, time);
	};

	if (mediaQuery && !mediaQuery.matches) throttle(scrollHandler, 250);
	window.addEventListener('scroll', () => {
		if (mediaQuery && !mediaQuery.matches) throttle(scrollHandler, 250);
	});
}
