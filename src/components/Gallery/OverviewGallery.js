import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './OverviewGallery.module.scss';

import Card from '../UI/Card';

import typography from '../../assets/icons/typography.svg';
import iconography from '../../assets/icons/iconography.svg';
import palette from '../../assets/icons/palette.svg';
import branding from '../../assets/icons/branding.svg';

const icons = {
	typography: typography,
	iconography: iconography,
	palette: palette,
	branding: branding,
};

const OverviewGallery = (props) => {
	const [t] = useTranslation();

	return (
		<ul className={styles.gallery}>
			{props.items.map((item) => (
				<li key={item.id}>
					<Link to={`${props.linkPrefix}${item.id}`}>
						<Card>
							<div className={styles.thumbnail}>
								<img
									src={item.thumbnail}
									alt={item.title}
								/>
							</div>
							<div className={styles.content}>
								<div>
									<h2>{item.title}</h2>
									<h3>
										{item.categories.map((category, index) => {
											if (index === 0) return t(category);
											if (index === item.categories.length - 1) return ` & ${t(category)}`;
											return `, ${t(category)}`;
										})}
									</h3>
								</div>
								<div className={styles.tags}>
									{item.tags.map(
										(tag) =>
											icons[tag] && (
												<img
													key={tag}
													src={icons[tag]}
													alt={tag}
													className='color_shift'
												/>
											)
									)}
								</div>
							</div>
						</Card>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default OverviewGallery;
