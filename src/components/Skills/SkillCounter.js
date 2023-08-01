import styles from './SkillCounter.module.scss';

const Progress = (props) => {
	return (
		<svg
			width='0'
			height='0'
			viewBox='0 0 64 64'
		>
			<circle
				cx='32'
				cy='32'
				r='28'
			/>
			<circle
				cx='32'
				cy='32'
				r='28'
				style={{
					strokeDashoffset: props.progress,
				}}
			/>
		</svg>
	);
};

const SkillCounter = (props) => {
	return (
		<div className={styles.counter}>
			<div className={styles.progress}>
				<img
					className='color_shift'
					src={props.icon}
					alt={props.label}
				/>
				<Progress progress={props.progress && ((100 - props.progress) / 100) * -176} />
			</div>
			<span>{props.label}</span>
		</div>
	);
};

export default SkillCounter;
