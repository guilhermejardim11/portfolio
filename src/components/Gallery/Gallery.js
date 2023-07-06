import { Link } from 'react-router-dom';

import styles from './Gallery.module.scss';

const Gallery = (props) => {
	return (
		<ul className={styles.gallery}>
			{props.projectList.map((project) => (
				<li key={project.id}>
					<Link to={`/projects/${project.id}`}>
						<img src={project.thumbnail} alt={project.title} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Gallery;
