import { useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Error.module.scss';

import RootLayout from '../layouts/Root';
import Banner from '../components/Banner/Banner';

const ErrorPage = () => {
	const error = useRouteError();
	const [t] = useTranslation();

	let emoji = '( •o•)';
	let title = 'An error occurred.';
	let message = 'Something went wrong.';

	switch (error.status) {
		case 401:
			emoji = '(˚ ˃̣̣̥⌓˂̣̣̥ )';
			title = t('error.401.title');
			message = t('error.401.message', { status: `<b>${error.status}</b>` });
			break;
	
		case 403:
			emoji = '(≖‿≖)';
			title = t('error.403.title');
			message = t('error.403.message', { status: `<b>${error.status}</b>` });
			break;
	
		case 400:
			emoji = '( ´･･)';
			title = t('error.400.title');
			message = t('error.400.message', { status: `<b>${error.status}</b>` });
			break;
	
		case 503:
			emoji = '( ͡° ͜ʖ ͡°)';
			title = t('error.503.title');
			message = t('error.503.message', { status: `<b>${error.status}</b>` });
			break;
	
		case 408:
			emoji = '(/._.)/';
			title = t('error.408.title');
			message = t('error.408.message', { status: `<b>${error.status}</b>` });
			break;

		case 404:
			emoji = '(¬‿¬)';
			title = t('error.404.title');
			message = t('error.404.message', { status: `<b>${error.status}</b>` });
			break;

		case 500:
			emoji = '(ꐦ○_○)';
			title = t('error.500.title');
			message = t('error.500.message', { status: `<b>${error.status}</b>` });
			break;

		default:
			break;
	}

	return (
		<RootLayout>
			<Banner className={styles.banner}>
				<h1>{emoji}</h1>
				<h2>{title}</h2>
				<p>{message}</p>
			</Banner>
		</RootLayout>
	);
};

export default ErrorPage;
