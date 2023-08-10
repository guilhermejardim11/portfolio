import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DeviceContext } from '../../context/DeviceContext';

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
	const deviceContext = useContext(DeviceContext);

	return (
		<div className={styles.gallery}>
			{props.items.map((item) => (
				<Link
					key={item.id}
					to={`${props.linkPrefix}${item.id}`}
				>
					<img
						src={item.thumbnail}
						alt={item.title}
					/>
					{deviceContext.isDesktop && (
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
					)}
				</Link>
			))}
		</div>
	);
};

export default Gallery;
