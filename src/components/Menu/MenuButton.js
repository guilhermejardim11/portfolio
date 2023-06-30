import { useState } from 'react';

import styles from './MenuButton.module.scss';

import Dot from '../UI/Dot';

const MenuButton = (props) => {
	const [isActive, setIsActive] = useState(false);

	const onClickHandler = () => {
		props.onClick();
		setIsActive(!isActive);
	};

	return (
		<button
			type='button'
			title='Menu Button'
			className={`${styles.button} ${isActive && styles.active}`}
			onClick={onClickHandler}
		>
			<Dot size='28' className={styles.dot} />
			<i></i>
		</button>
	);
};

export default MenuButton;
