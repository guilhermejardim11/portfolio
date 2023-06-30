import styles from './IconButton.module.scss';

import Dot from './Dot';

const IconButton = (props) => {
	return (
		<button
			type='button'
			className={`${props.className} ${styles.button}`}
			onClick={props.onClick}
		>
			<Dot size='38' className={styles.dot} />
			<i></i>
		</button>
	);
};

export default IconButton;
