import styles from './Contact.module.scss';

const Contact = (props) => {
    return (
        <div className={`${styles.contact} ${props.className}`}>
            <h5>{props.title}</h5>
            <a href={props.href} target='_blank' rel='external noreferrer'>
                {props.value}
            </a>
        </div>
    );
};

export default Contact;
