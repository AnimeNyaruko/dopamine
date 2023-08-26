const scrollPercent = 80;
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const elementInView = (el, percentageScroll = 100) => {
	const elementTop = el.getBoundingClientRect().top;
	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
	);
};

const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;

	return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const scrollElements = document.querySelectorAll('.scroll-animation');

const scrollHandler = () => {
	scrollElements.forEach((e) => {
		if (elementInView(e, scrollPercent)) e.classList.add('scroll-animation-scrolled');
		else if (elementOutofView(e)) e.classList.remove('scroll-animation-scrolled');
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

window.addEventListener('scroll', () => {
	if (mediaQuery && !mediaQuery.matches) throttle(scrollHandler, 250);
});
