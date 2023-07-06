import styles from './MenuButton.module.scss';

import Dot from '../UI/Dot';

const MenuButton = (props) => {
	const onClickHandler = () => {
		props.onClick();
	};

	return (
		<button
			type='button'
			title='Menu Button'
			className={`${styles.button} ${props.isMenuOpen && styles.active}`}
			onClick={onClickHandler}
		>
			<Dot size='28' className={styles.dot} />
			<i></i>
		</button>
	);
};

export default MenuButton;
