import styles from './ModularBox.module.scss';

const ModularBox = (props) => {
	return (
		<div
			className={styles.modular_box}
			style={{
				gap: props.gap,
			}}
		>
			{props.children}
		</div>
	);
};

export default ModularBox;
