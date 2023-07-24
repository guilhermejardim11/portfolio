import styles from './Overlay.module.scss';

const Overlay = (props) => {
	return (
		<div className={`${props.className} ${props.isOpen ? styles.open : ''} ${styles.overlay}`}>
			{props.children}
		</div>
	);
};

export default Overlay;
