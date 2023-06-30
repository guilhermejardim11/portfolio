import styles from './Button.module.scss';

const Button = (props) => {
	return (
		<button
			title={props.title != null ? props.title : 'Button'}
			className={styles.button}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
