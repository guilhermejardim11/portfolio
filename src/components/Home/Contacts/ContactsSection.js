import { useTranslation } from 'react-i18next';

import styles from './ContactsSection.module.scss';

import Section from '../../Section/Section';
import SectionTitle from '../../Section/SectionTitle';
import Contact from './Contact';

const ContactsSection = () => {
	const [t, i18n] = useTranslation();

	return (
		<Section background className={styles.contacts}>
			<SectionTitle title={t('contacts')} />
			<h4>
				<span>{t('section.contacts.got_a_project')}</span>
				<span>{t('section.contacts.lets_talk')}</span>
			</h4>
			<p>{t('section.contacts.desc')}</p>
			<Contact
				title={t('email')}
				href='mailto:guilhermejardim11@gmail.com'
				value='guilhermejardim11@gmail.com'
			/>
			<Contact
				title='LinkedIn'
				href='https://www.linkedin.com/in/guilhermejardim11/'
				value='linkedin.com/in/guilhermejardim11'
			/>
		</Section>
	);
};

export default ContactsSection;
