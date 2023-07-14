import styles from './VisitProject.module.scss';

import ExternalArrow from '../UI/ExternalArrow';

const VisitProject = (props) => {
	return (
		<div className={styles.visit_project}>
			<h4>Visit the {props.type} at:</h4>
			<h5>
				<a href={props.url} target='_blank' rel='external'>
					{props.text}
					<ExternalArrow className={styles.arrow} />
				</a>
			</h5>
		</div>
	);
};

export default VisitProject;
