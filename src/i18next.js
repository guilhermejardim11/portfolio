import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en_US from './locales/en_US/translation.json';
import pt_PT from './locales/pt_PT/translation.json';

i18next
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en_US',
		resources: {
			en_US: { translation: en_US },
			pt_PT: { translation: pt_PT },
		},
	});
