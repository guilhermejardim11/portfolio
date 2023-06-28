import { Link } from 'react-router-dom';

import styles from './SectionTitle.module.scss';

import Arrow from '../UI/Arrow';

const SectionTitle = (props) => {
	return (
		<div className={styles.title}>
			<h3>{props.title}</h3>
			{props.to && props.text && (
				<Link to={props.to}>
					{props.text} <Arrow />
				</Link>
			)}
		</div>
	);
};

export default SectionTitle;
