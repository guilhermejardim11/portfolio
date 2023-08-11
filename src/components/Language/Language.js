import { useState } from 'react';

import LanguageButton from './LanguageButton';
import LanguageModal from './LanguageModal';

const Language = () => {
	const [isLangOverlayOpen, setIsLangOverlayOpen] = useState(false);

	const onOpenLangOverlayHandler = () => {
		setIsLangOverlayOpen(true);
	};

	const onCloseLanguageOverlayHandler = () => {
		setIsLangOverlayOpen(false);
	};

	return (
		<>
			<LanguageButton onClick={onOpenLangOverlayHandler} />
			<LanguageModal
				isOpen={isLangOverlayOpen}
				onClose={onCloseLanguageOverlayHandler}
			/>
		</>
	);
};

export default Language;
