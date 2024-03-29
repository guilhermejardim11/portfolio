import { Trans, useTranslation } from 'react-i18next';

import styles from './Error.module.scss';

import PageTitle from '../components/Page/PageTitle';
import Banner from '../components/Banner/Banner';

const ErrorPage = ({ status = null }) => {
	const [t] = useTranslation();

	let emoji = '( •o•)';
	let title = t('error.default.title');
	let message = t('error.default.message');

	if (status != null) {
		switch (status) {
			case 401:
				emoji = '(˚ ˃̣̣̥⌓˂̣̣̥ )';
				title = t('error.401.title');
				message = (
					<Trans
						i18nKey='error.401.message'
						values={{ error: status }}
					>
						You need an authorization type <b>{{ status }}</b> to
						access this page. Sad for you, of course.
					</Trans>
				);
				break;

			case 403:
				emoji = '(≖‿≖)';
				title = t('error.403.title');
				message = (
					<Trans
						i18nKey='error.403.message'
						values={{ error: status }}
					>
						This place is forbidden, <b>{{ status }}</b>. Don't even
						try it.
					</Trans>
				);
				break;

			case 400:
				emoji = '( ´･･)';
				title = t('error.400.title');
				message = (
					<Trans
						i18nKey='error.400.message'
						values={{ error: status }}
					>
						Nothing to see here, <b>{{ status }}</b>. Move along!
					</Trans>
				);
				break;

			case 503:
				emoji = '( ͡° ͜ʖ ͡°)';
				title = t('error.503.title');
				message = (
					<Trans
						i18nKey='error.503.message'
						values={{ error: status }}
					>
						And that's all the information you're gonna get. Now
						move, <b>{{ status }}</b>...
					</Trans>
				);
				break;

			case 408:
				emoji = '(/._.)/';
				title = t('error.408.title');
				message = (
					<Trans
						i18nKey='error.408.message'
						values={{ error: status }}
					>
						Why would you stop my request prematurely, ah? Wait...
						You clicked the link '<b>{{ status }}</b>' times??? HOW?
					</Trans>
				);
				break;

			case 404:
				emoji = '(¬‿¬)';
				title = t('error.404.title');
				message = (
					<Trans
						i18nKey='error.404.message'
						values={{ error: status }}
					>
						Seems like this page is missing. Perhaps you should stop
						trying to hack my <b>{{ status }}</b>th system.
					</Trans>
				);
				break;

			case 500:
				emoji = '(ꐦ○_○)';
				title = t('error.500.title');
				message = (
					<Trans
						i18nKey='error.500.message'
						values={{ error: status }}
					>
						Our server is, ah... taking a <b>{{ status }}</b> hour
						break! Yea, sure, why not...
					</Trans>
				);
				break;

			default:
				break;
		}
	}

	return (
		<>
			<PageTitle title='error' />

			<Banner className={styles.banner}>
				<h1>{emoji}</h1>
				<h2>{title}</h2>
				<p>{message}</p>
			</Banner>
		</>
	);
};

export default ErrorPage;
