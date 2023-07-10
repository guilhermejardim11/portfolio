import { Link } from 'react-router-dom';

import styles from './OverviewGallery.module.scss';

import Card from '../UI/Card';
import Arrow from '../UI/Arrow';

const OverviewGallery = (props) => {
	return (
		<ul className={styles.gallery}>
			{props.items.map((item) => (
				<li key={item.id}>
					<Link to={`${props.linkPrefix}${item.id}`}>
						<Card>
							<div className={styles.thumbnail}>
								<img src={item.thumbnail} alt={item.title} />
							</div>
							<div className={styles.content}>
								<h2>{item.title}</h2>
								<Arrow />
							</div>
						</Card>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default OverviewGallery;
