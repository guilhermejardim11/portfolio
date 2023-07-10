import { Link } from 'react-router-dom';

import styles from './MasonryGallery.module.scss';

const MasonryGallery = (props) => {
	return (
		<ul className={styles.gallery}>
			{props.items.map((item) => (
				<li key={item.id}>
					<Link to={`${props.linkPrefix}${item.id}`}>
						<img src={item.thumbnail} alt={item.title} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MasonryGallery;
