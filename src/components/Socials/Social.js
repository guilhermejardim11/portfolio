import styles from "./Social.module.scss";

const Social = (props) => {
    return (
        <li className={styles.social}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt={props.social} />
            </a>
        </li>
    );
};

export default Social;
