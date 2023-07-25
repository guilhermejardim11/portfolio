import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import ContextWrapper from './context/ContextWrapper';
import App from './App';

import './reset.scss';
import './index.scss';

import './i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ContextWrapper>
		<Suspense fallback='loading'>
			<App />
		</Suspense>
	</ContextWrapper>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
