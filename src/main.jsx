import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './Router.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faRightLong, faLeftLong);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
