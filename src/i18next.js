import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		debug: true,
		resources: {
			en: {
				translation: {
					hello: "Hello! I'm Guilherme",
					job: 'UI/UX Designer',
				},
			},
			pt: {
				translation: {
					hello: 'Olá! Sou o Guilherme',
					job: 'Designer UI/UX',
				},
			},
		},
	});
