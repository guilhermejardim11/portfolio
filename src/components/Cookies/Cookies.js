import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Cookies.module.scss';

import Button from '../UI/Button';

const Cookies = () => {
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
                <h6>Cookies</h6>
                <p>
                    We use cookies to give you a better overall experience by
                    saving your preferences. By clicking 'Accept', you are
                    agreeing with the use of cookies.
                </p>
                <div className={styles.actions}>
                    <Link to='/portfolio/privacy-policy'>See More</Link>
                    <Button onClick={closeCookiesPopupHandler}>Accept</Button>
                </div>
            </div>
        )
    );
};

export default Cookies;
