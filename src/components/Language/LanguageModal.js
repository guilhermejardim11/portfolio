import { useTranslation } from 'react-i18next';

import Modal from '../Modal/Modal';
import LanguageSelector from './LanguageSelector';

const LanguageOverlay = (props) => {
	const [t] = useTranslation();

	return (
		<Modal
			title={t('language_selection')}
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<LanguageSelector onClose={props.onClose} />
		</Modal>
	);
};

export default LanguageOverlay;
