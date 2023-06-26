import styles from "./Section.module.scss";

const Section = (props) => {
    const classes = `${styles.section} ${
        props.background ? styles.background : ""
    } ${props.pattern ? styles.pattern : ""}`;

    return (
        <section id={props.id} className={classes}>
            {props.children}
        </section>
    );
};

export default Section;
