import { motion } from 'framer-motion';
import styles from './Loading.module.scss';
import Logo from '../UI/Logo';

const boxVariants = {
	initial: {
		backdropFilter: 'blur(20px)',
		opacity: 1,
	},
	animate: {
		backdropFilter: 'blur(5px)',
		opacity: 0,
		transition: {
			duration: 0.75,
			delay: 2.5,
		},
	},
};

const logosVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
		transition: {
			duration: 0.3,
			delay: 2.3,
			ease: [0, 0.2, 0.8, 1],
		},
	},
};

const maskVariants = {
	initial: {
		clipPath: 'inset(0 0 0 0)',
	},
	animate: {
		clipPath: 'inset(0 0 100% 0)',
		transition: {
			duration: 1.5,
			delay: 0.2,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};

const Loading = () => {
	return (
		<motion.div
			className={styles.loading}
			variants={boxVariants}
			initial='initial'
			animate='animate'
		>
			<motion.div
				variants={logosVariants}
				initial='initial'
				animate='animate'
			>
				<motion.div
					variants={maskVariants}
					initial='initial'
					animate='animate'
				>
					<Logo />
				</motion.div>

				<div>
					<Logo />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Loading;
