import { useTranslation } from 'react-i18next';

// import styles from './LanguageSelector.module.scss';

import Button from '../UI/Button';

const langs = {
	'en-US': { nativeName: 'English' },
	'pt-PT': { nativeName: 'Português' },
};

const LanguageSelector = () => {
	const [t, i18n] = useTranslation();

	return (
		<div>
			{Object.keys(langs).map((lang) => (
				<Button
					key={lang}
					onClick={() => i18n.changeLanguage(lang)}
					disabled={i18n.resolvedLanguage === lang}
				>
					{langs[lang].nativeName}
				</Button>
			))}
		</div>
	);
};

export default LanguageSelector;
