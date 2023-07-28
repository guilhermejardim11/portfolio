import styles from './NumberTitle.module.scss';

const NumberTitle = ({ level, title, index, pos }) => {
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

	return <Tag className={`${styles.title} ${posStyle}`}><span>{index}</span>{title}</Tag>;
};

export default NumberTitle;
