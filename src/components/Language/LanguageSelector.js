import { useTranslation } from 'react-i18next';

import styles from './LanguageSelector.module.scss';

import LanguageOption from './LanguageOption';

import flag_de from '../../assets/icons/lang/de.svg';
import flag_es from '../../assets/icons/lang/es.svg';
import flag_fr from '../../assets/icons/lang/fr.svg';
import flag_it from '../../assets/icons/lang/it.svg';
import flag_pt from '../../assets/icons/lang/pt.svg';
import flag_uk from '../../assets/icons/lang/uk.svg';
import flag_us from '../../assets/icons/lang/us.svg';

const langs = {
	pt_PT: {
		native: 'Português',
		flag: flag_pt,
	},
	en_US: {
		native: 'English (United States)',
		flag: flag_us,
	},
	en_UK: {
		native: 'English (United Kingdom)',
		flag: flag_uk,
		disabled: true,
	},
	es_ES: {
		native: 'Español',
		flag: flag_es,
		disabled: true,
	},
	fr_FR: {
		native: 'Francais',
		flag: flag_fr,
		disabled: true,
	},
	it_IT: {
		native: 'Italiano',
		flag: flag_it,
		disabled: true,
	},
	de_DE: {
		native: 'Deutsch',
		flag: flag_de,
		disabled: true,
	},
};

const LanguageSelector = (props) => {
	const [t, i18n] = useTranslation();

	return (
		<div className={styles.selector}>
			{Object.keys(langs).map((lang) => (
				<LanguageOption
					key={lang}
					onClick={() => {
						i18n.changeLanguage(lang);
						props.onClose();
					}}
					label={langs[lang].native}
					flag={langs[lang].flag}
					isDisabled={langs[lang].disabled}
					isSelected={i18n.resolvedLanguage === lang}
				/>
			))}
		</div>
	);
};

export default LanguageSelector;
