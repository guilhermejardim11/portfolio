import styles from './HeaderActions.module.scss';

import ThemeButton from '../Theme/ThemeButton';
// import Language from '../Language/Language';

const HeaderActions = () => {
	return (
		<div className={styles.actions}>
			<ThemeButton />
			{/* <Language /> */}
		</div>
	);
};

export default HeaderActions;
