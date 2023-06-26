import styles from "./Dot.module.scss";

const Dot = (props) => {
    return (
        <div
            className={`${styles.dot} ${props.className}`}
            style={{
                ...props.style,
                height: `${props.size || 16}px`,
                width: `${props.size || 16}px`,
            }}
        ></div>
    );
};

export default Dot;
