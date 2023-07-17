import { useTranslation } from 'react-i18next';

import styles from './ProjectDetails.module.scss';

const ProjectDetails = (props) => {
	const [t, i18n] = useTranslation();

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return (
		<div className={styles.details}>
			<span>{t('date')}:</span>
			<div>{props.date.toLocaleString(i18n.language, options)}</div>

			{props.tags.length > 0 && (
				<>
					<span>{t('tags')}:</span>
					<div>
						{props.tags.map((tag, index) =>
							index !== 0 ? (
								<>
									<span>, </span> {tag}
								</>
							) : (
								tag
							)
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default ProjectDetails;
