import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Skill.module.scss';

import Card from '../UI/Card';

const Skill = (props) => {
	const [t] = useTranslation();
	const [level, setLevel] = useState();

	const levels = {
		expert: [75, 100],
		advanced: [50, 75],
		intermidiate: [25, 50],
		basic: [0, 25],
	};

	useEffect(() => {
		for (var key in levels) {
			if (props.progress >= levels[key][0] && props.progress <= levels[key][1]) {
				setLevel(key);
				break;
			}
		}
	}, [props.progress]);

	return (
		level && (
			<Card className={styles.skill}>
				<div className={styles.icon}>
					<img
						className='color_shift'
						src={props.icon}
						alt={props.title}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.labels}>
						<span>{props.title}</span>
						<span>{t(`skill.level.${level}`)}</span>
					</div>
					<div className={styles.progress}>
						<div
							style={{
								width: props.progress >= 0 && `${props.progress}%`,
							}}
						/>
					</div>
				</div>
			</Card>
		)
	);
};

export default Skill;
