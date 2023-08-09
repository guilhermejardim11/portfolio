import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Gallery.module.scss';

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

const Gallery = (props) => {
	const [t] = useTranslation();

	return (
		<div className={styles.gallery}>
			{props.items.map((item) => (
				<div key={item.id}>
					<Link to={`${props.linkPrefix}${item.id}`}>
						<img
							src={item.thumbnail}
							alt={item.title}
						/>
						<div className={styles.content}>
							<div>
								<div>
									<h4>{item.title}</h4>
									<span>
										{item.categories.map((category, index) => {
											if (index === 0) return t(category);
											if (index === item.categories.length - 1) return ` & ${t(category)}`;
											return `, ${t(category)}`;
										})}
									</span>
								</div>
								<div className={styles.tags}>
									{item.tags.map(
										(tag) =>
											icons[tag] && (
												<img
													key={tag}
													src={icons[tag]}
													alt={tag}
													className='icon_white'
												/>
											)
									)}
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Gallery;
