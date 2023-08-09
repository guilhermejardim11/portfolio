import { useTranslation } from 'react-i18next';

import styles from './SkillGroup.module.scss';

import Skill from './Skill';

const SkillGroup = (props) => {
	const [t] = useTranslation();

	return (
		<div className={styles.skill_group}>
			{props.skills.map((value) => (
				<Skill
					key={value.title}
					title={t(value.title)}
					icon={value.icon}
					progress={value.progress}
				/>
			))}
		</div>
	);
};

export default SkillGroup;
