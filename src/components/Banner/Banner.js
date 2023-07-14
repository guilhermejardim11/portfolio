import { useTranslation } from 'react-i18next';

import styles from './Banner.module.scss';

import Arrow from '../UI/Arrow';

const Banner = (props) => {
	const [t, i18n] = useTranslation();
	// const [innerHeight, setInnerHeight] = useState();

	// useEffect(() => {
	//     setTimeout(() => {
	//         setInnerHeight(window.innerHeight);
	//     }, 100);
	// }, []);

	const style = {
		backgroundImage: `url("${props.background}")`,
		// height: innerHeight || '',
	};

	return (
		<div className={`${styles.banner} ${props.className}`} style={style}>
			{props.children}

			<div className={styles.scroll_down}>
				<Arrow />
				<div>{t('swipe')}</div>
			</div>
		</div>
	);
};

export default Banner;
