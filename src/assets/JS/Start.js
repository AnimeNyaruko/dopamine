function DaysItemConfig() {
	document.querySelectorAll('.DaysItem').forEach((e) => {
		const height = e.clientHeight;
		e.style.width = height + 'px';
	});
}

export default [DaysItemConfig];
