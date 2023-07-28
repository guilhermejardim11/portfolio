import { motion } from 'framer-motion';

import styles from './Transition.module.scss';

import Logo from '../UI/Logo';

const Transition = () => {
	return (
		<>
			<motion.div
				className={styles.slide_in}
				key='slide_in'
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 1 }}
				transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
			/>

			<motion.div
				className={styles.slide_out}
				key='slide_out'
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 0 }}
				transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
			/>

			<motion.div
				className={styles.logo}
				key='slide_in__logo'
				initial={{ x: '-65vw' }}
				animate={{ x: '-65vw' }}
				exit={{ x: 0 }}
				transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
			>
				<Logo />
			</motion.div>

			<motion.div
				className={styles.logo}
				key='slide_out__logo'
				initial={{ x: 0 }}
				animate={{ x: '65vw' }}
				exit={{ x: '65vw' }}
				transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
			>
				<Logo />
			</motion.div>
		</>
	);
};

export default Transition;
