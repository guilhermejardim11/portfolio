import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuContext } from '../../context/MenuContext';
import { ScrolledContext } from '../../context/ScrolledContext';

import styles from './HeaderTitle.module.scss';

const titleVariants = {
	initial: {
		top: '-100%',
		transition: {
			duration: 0.7,
			ease: [0.87, 0, 0.13, 1],
		},
	},
	animate: {
		top: 0,
		transition: {
			duration: 0.7,
			delay: 0.2,
			ease: [0.87, 0, 0.13, 1],
		},
	},
	exit: {
		top: '100%',
		transition: {
			duration: 0.4,
			ease: [0.87, 0, 0.13, 1],
		},
	},
};

const HeaderTitle = () => {
	const menuContext = useContext(MenuContext);
	const scrolledContext = useContext(ScrolledContext);

	return (
		<AnimatePresence mode='wait'>
			<motion.h1 className={`${styles.title} ${!menuContext.isMenuOpen && scrolledContext.isScrolled ? styles.scrolled : ''} ${menuContext.isMenuOpen ? styles.hidden : ''}`}>
				{menuContext.currentPageName && (
					<motion.span
						variants={titleVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						key={menuContext.currentPageName}
					>
						{menuContext.currentPageName}
					</motion.span>
				)}
			</motion.h1>
		</AnimatePresence>
	);
};

export default HeaderTitle;
