import styles from './BorderButton.module.scss';

const BorderButton = (props) => {
	return (
		<button
			className={`${styles.button} ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default BorderButton;
