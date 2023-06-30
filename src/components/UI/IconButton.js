import styles from './IconButton.module.scss';

import Dot from './Dot';

const IconButton = (props) => {
	return (
		<button
			type='button'
			title={props.title != null ? props.title : 'Icon Button'}
			className={`${props.className} ${styles.button}`}
			onClick={props.onClick}
		>
			<Dot size='38' className={styles.dot} />
			<i></i>
		</button>
	);
};

export default IconButton;
