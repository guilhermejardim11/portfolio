import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Cookies.module.scss';

import Button from '../UI/Button';

const Cookies = () => {
	const [t, i18n] = useTranslation();
	const [agreedCookies, setAgreedCookies] = useState(false);
	const [hidePopup, setHidePopup] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('agreedCookies') === '1') {
			setAgreedCookies(true);
		}
	}, []);

	const closeCookiesPopupHandler = () => {
		localStorage.setItem('agreedCookies', '1');
		setHidePopup(true);
		setTimeout(() => {
			setAgreedCookies(true);
		}, 400);
	};

	return (
		!agreedCookies && (
			<div className={`${styles.popup} ${hidePopup && styles.hide}`}>
				<h6>{t('cookies.title')}</h6>
				<p>{t('cookies.desc')}</p>
				<div className={styles.actions}>
					<Link to='/privacy-policy'>{t('see_more')}</Link>
					<Button onClick={closeCookiesPopupHandler}>{t('accept')}</Button>
				</div>
			</div>
		)
	);
};

export default Cookies;
