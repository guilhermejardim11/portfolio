import { useScroll, motion, useTransform } from 'framer-motion';

import styles from './Blob.module.scss';

const useParallax = (value, distance) => {
	const absDistance = Math.abs(distance);
	return useTransform(value, [0, 1], [distance, distance + absDistance * 3]);
};

const Blob = (props) => {
	const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, props.offsetY);

	return (
		<motion.div
			className={styles.blob}
			style={{
				x: props.offsetX,
				y,
				backgroundColor: props.color,
				opacity: props.opacity,
			}}
		/>
	);
};

export default Blob;
