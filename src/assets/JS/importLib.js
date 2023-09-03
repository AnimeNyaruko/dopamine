export default function importLib() {
	const script = document.createElement('script');
	script.setAttribute('id', 'MathJax-script');
	script.setAttribute('async', true);
	script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');

	document.body.appendChild(script);
}
