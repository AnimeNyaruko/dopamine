export default function run() {
	const scrollOffset = 100;

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
	function throttle(func, delay) {
		let lastCall = 0;

		return function (...args) {
			const now = new Date().getTime();

			if (now - lastCall < delay) {
				return;
			}

			lastCall = now;
			return func(...args);
		};
	}

	scrollHandler();
	window.addEventListener('scroll', throttle(scrollHandler, 125));
}
