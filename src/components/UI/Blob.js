import { useScroll, motion, useTransform } from 'framer-motion';

import styles from './Blob.module.scss';

const useParallax = (value, distance) => {
	return useTransform(value, [0, 1], [0, distance]);
};

const Blob = (props) => {
	const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, window.innerHeight);

	return (
		<motion.div
			className={styles.blob}
			style={{
				y,
				top: `calc(50% - 300px + ${props.y}px)`,
				left: `calc(50% - 70vw + ${props.x}px)`,
				backgroundColor: props.color,
				opacity: props.opacity,
			}}
		/>
	);
};

export default Blob;
