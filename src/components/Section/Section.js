import styles from './Section.module.scss';

const Section = (props) => {
	const classes = `${styles.section} ${props.className} ${
		props.background ? styles.background : ''
	} ${props.extend ? styles.extend : ''}`;

	return (
		<section id={props.id} className={classes}>
			{props.children}
		</section>
	);
};

export default Section;
