import styles from "./Copyright.module.scss";

const Copyright = () => {
    let date = new Date().getFullYear();

    return (
        <div className={styles.copyright}>
            © Copyright {date} Guilherme Jardim.
            <br />
            All rights reserved.
        </div>
    );
};

export default Copyright;
