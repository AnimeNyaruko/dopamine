export default function ClickEffect(elList) {
	const arrow = document.querySelector('.click-effect-object');
	function onPC() {
		const effect = 'click-effect-arrow';
		function onMOverHandler(e) {
			const accor = e.srcElement.getBoundingClientRect();
			arrow.style.top = accor.top * 1 + 'px';
			arrow.style.left = accor.right * 1.05 + 'px';
			setTimeout(() => {
				arrow.classList.add(effect);
			}, 1);
		}
		function onMBlurHandler() {
			arrow.classList.remove(effect);
		}
		elList.forEach((e) => {
			e.addEventListener('mouseover', onMOverHandler);
			e.addEventListener('mouseleave', onMBlurHandler);
		});
	}
	function mediaCheck() {
		if (mediaqr.matches) onPC();
		else arrow.style.display = 'none';
	}
	const mediaqr = window.matchMedia('(min-width:1024px)');
	mediaCheck();
	mediaqr.addEventListener('change', mediaCheck);
}

/**
 * TODO: Error on 'click-effect' class because lg: is not affect to it. So have to create it's own media query to detect whether user is on PC or
 */
