import styles from './Overlay.module.scss';

const Overlay = (props) => {
	return <div className={`${styles.overlay} ${props.isOpen ? styles.open : ''} ${props.className}`}>{props.children}</div>;
};

export default Overlay;
