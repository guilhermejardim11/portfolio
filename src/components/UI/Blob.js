import { useScroll, motion, useTransform } from 'framer-motion';

import styles from './Blob.module.scss';

const useParallax = (value, distance) => {
	const absDistance = Math.abs(distance);
	return useTransform(value, [0, 1], [distance, distance + absDistance * -20]);
};

const Blob = (props) => {
	const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, props.offsetY);

	return (
		<motion.div
			className={styles.blob}
			style={{
				y,
				background: `radial-gradient(${props.color} 0%, transparent 70%)`,
			}}
		/>
	);
};

export default Blob;
