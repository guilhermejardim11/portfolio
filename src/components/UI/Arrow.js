import styles from './Arrow.module.scss';

const Arrow = (props) => {
	return (
		<svg
			className={styles.arrow}
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='11'
			viewBox='0 0 20 11'
		>
			<g transform='translate(-8.5 -8.982)'>
				<path
					style={{ fill: props.color }}
					d='M18.038.9H0V-.9H18.038Z'
					transform='translate(8.5 14.482)'
				/>
				<path
					style={{ fill: props.color }}
					d='M-444.707-455.923l-1.223-1.408,4.148-4.092-4.148-4.092,1.223-1.408,5.575,5.5Z'
					transform='translate(467.632 475.905)'
				/>
			</g>
		</svg>
	);
};

export default Arrow;
