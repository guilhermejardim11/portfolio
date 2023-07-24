import styles from "./LanguageOverlay.module.scss";

import Overlay from '../UI/Overlay';
import LanguageSelector from './LanguageSelector';

const LanguageOverlay = (props) => {
    return (
		<Overlay className={styles.overlay} isOpen={props.isOpen}>
            <LanguageSelector />
        </Overlay>
    );
};

export default LanguageOverlay;