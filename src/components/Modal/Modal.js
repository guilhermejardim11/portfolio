import styles from './Modal.module.scss';

import Overlay from '../UI/Overlay';
import IconButton from '../UI/IconButton';

const Modal = (props) => {
	return (
		<Overlay
			className={styles.modal}
			isOpen={props.isOpen}
		>
			<div className={styles.header}>
				<span>{props.title}</span>

				<IconButton
					className={styles.button}
					title='Close Modal'
					onClick={props.onClose}
				/>
			</div>

			{props.children}
		</Overlay>
	);
};

export default Modal;
