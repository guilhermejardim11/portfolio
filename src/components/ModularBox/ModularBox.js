import styles from './ModularBox.module.scss';

const ModularBox = (props) => {
	return (
		<div
			className={`${styles.box} ${props.vertical && styles.vertical}`}
			style={{
				gap: props.gap,
			}}
		>
			{props.children}
		</div>
	);
};

export default ModularBox;
