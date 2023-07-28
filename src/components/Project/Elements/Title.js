import styles from './Title.module.scss';

const Title = ({ level, title, pos }) => {
	const Tag = `h${level}`;

	let posStyle;
	switch (pos) {
		case 'center':
			posStyle = styles.center;
			break;

		case 'right':
			posStyle = styles.right;
			break;

		default:
			break;
	}

	return <Tag className={`${styles.title} ${posStyle}`}>{title}</Tag>;
};

export default Title;
