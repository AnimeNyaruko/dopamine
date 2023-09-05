export default function LibImport() {
	const libList = [];
	function MathJaxLib() {
		const script = document.createElement('script');
		script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('id', 'MathJax-script');
		script.setAttribute('async', 'true');
		return script;
	}
	function MathJaxConfig() {
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
		return configScript;
	}
	function FontAwesomeLib() {
		const script = document.createElement('script');
		script.crossOrigin = 'anonymous';
		script.src = 'https://kit.fontawesome.com/cd82837d9b.js';
		return script;
	}

	libList.push(MathJaxConfig());
	libList.push(MathJaxLib());
	libList.push(FontAwesomeLib());
	libList.forEach((e) => {
		document.body.appendChild(e);
	});
}
