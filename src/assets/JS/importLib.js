export default function LibImport() {
	const script = document.createElement('script');
	script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('id', 'MathJax-script');
	script.setAttribute('async', 'true');
	const configScript = document.createElement('script');
	configScript.innerHTML = `
    MathJax = {
        options: {
            enableMenu: false,
            menuOptions: {
            settings: {
                inTabOrder: false,
                }
            },
        },
    };
    `;
	document.body.appendChild(configScript);
	document.body.appendChild(script);
}
