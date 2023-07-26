import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Loading.module.scss';

import Logo from '../UI/Logo';

const boxVariants = {
	initial: {
		backdropFilter: 'blur(20px)',
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		backdropFilter: 'blur(5px)',
		opacity: 0,
		transition: {
			duration: 0.75,
			delay: 2.7,
			opacity: { delay: 2.5, duration: 0.95 },
		},
		transitionEnd: { display: 'none' },
	},
};

const logosVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
			delay: 2.3,
			ease: 'easeInOut',
		},
	},
};

const maskVariants = {
	initial: {
		opacity: 0,
		clipPath: 'inset(0 0 0 0)',
	},
	animate: {
		opacity: 1,
	},
	exit: {
		clipPath: 'inset(0 0 100% 0)',
		transition: {
			duration: 1.5,
			delay: 0.2,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};

const Loading = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		const onPageLoad = () => {
			setIsLoading(false);
		};

		if (document.readyState === 'complete') {
			onPageLoad();
		} else {
			setIsLoading(true);
			window.addEventListener('load', onPageLoad, false);
			return () => window.removeEventListener('load', onPageLoad);
		}
	}, []);

	return (
		<AnimatePresence initial={false}>
			{isLoading && (
				<motion.div
					className={styles.loading}
					variants={boxVariants}
					initial='initial'
					animate='animate'
					exit='exit'
				>
					<motion.div
						variants={logosVariants}
						initial='initial'
						animate='animate'
						exit='exit'
					>
						<motion.div
							variants={maskVariants}
							initial='initial'
							animate='animate'
							exit='exit'
						>
							<Logo />
						</motion.div>

						<div>
							<Logo />
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Loading;
