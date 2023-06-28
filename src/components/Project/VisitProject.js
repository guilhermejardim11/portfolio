import styles from './VisitProject.module.scss';

import external from '../../assets/light/icons/external.svg';

const VisitProject = (props) => {
	return (
		<div className={styles.visit_project}>
			<h4>Visit the {props.type} at:</h4>
			<h5>
				<a href={props.url} target='_blank' rel='external'>
					{props.text}
					<img src={external} alt='external' />
				</a>
			</h5>
		</div>
	);
};

export default VisitProject;
