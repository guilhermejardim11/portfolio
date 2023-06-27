import styles from './ContactsSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import Contact from '../Contact/Contact';

const ContactsSection = () => {
    return (
        <Section background className={styles.contacts}>
            <SectionTitle title='Contacts' />
            <h4>
                <span>Got a project?</span>
                <span>Let's talk!</span>
            </h4>
            <p>
                I'm always interested in new projects! You can reach me by email
                or message me in LinkedIn, and I'll be more than happy to
                answer!
            </p>
            <Contact
                title='Email'
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
