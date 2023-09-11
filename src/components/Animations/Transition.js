import { motion } from 'framer-motion';

import styles from './Transition.module.scss';

import Logo from '../UI/Logo';

const divVariants = {
	visible: {
		left: '100vw',
		transitionEnd: { left: '-100vw' },
	},
	hidden: {
		left: 0,
	},
};

const logoVariants = {
	visible: {
		x: 0,
	},
	hidden: {
		x: '-80vw',
		transitionEnd: { x: '80vw' },
	},
};

const Transition = () => {
	return (
		<motion.div
			className={styles.slide}
			key='slide'
			variants={divVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
		>
			<motion.div
				className={styles.logo}
				key='logo'
				variants={logoVariants}
				initial='visible'
				animate='hidden'
				exit='visible'
				transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
			>
				<Logo />
			</motion.div>
		</motion.div>
	);
};

export default Transition;
