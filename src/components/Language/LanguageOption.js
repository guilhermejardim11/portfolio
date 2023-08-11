import styles from './LanguageOption.module.scss';

const LanguageOption = (props) => {
	return (
		<button
			className={`${styles.option} ${props.isSelected ? styles.selected : ''} ${props.isDisabled ? styles.disabled : ''}`}
			onClick={props.onClick}
			disabled={props.isDisabled}
		>
			<div className={styles.icon}>
				<img
					src={props.flag}
					alt={props.label}
				/>
			</div>
			{props.label}
		</button>
	);
};

export default LanguageOption;
