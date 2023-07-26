import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './locales/en/translation.json';
import PT from './locales/pt/translation.json';

i18next
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		resources: {
			en: { translation: EN },
			pt: { translation: PT },
		},
	});
