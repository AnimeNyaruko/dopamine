function DaysItemConfig() {
	document.querySelectorAll('.DaysItem').forEach((e) => {
		const height = e.clientHeight;
		e.style.width = height + 'px';
	});
}
function progressConfig() {
	const height = window.innerHeight;
	const e = document.getElementById('progressLine');
	e.style.top = height + 'px';
}
export default [DaysItemConfig, progressConfig];
