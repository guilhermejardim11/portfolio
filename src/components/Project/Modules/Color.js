import styles from './Color.module.scss';

const Color = (props) => {
	return (
		<div className={styles.color}>
			<div style={{ backgroundColor: props.color }}></div>
			<span>{props.color}</span>
		</div>
	);
};

export default Color;
