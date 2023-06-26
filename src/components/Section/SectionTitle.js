import { Link } from "react-router-dom";

import styles from "./SectionTitle.module.scss";

import arrow from "../../assets/light/icons/arrow.png";

const SectionTitle = (props) => {
    return (
        <div className={styles.title}>
            <h3>{props.title}</h3>
            {props.url && props.text && (
                <Link to={props.to}>
                    {props.text} <img src={arrow} alt="arrow" />
                </Link>
            )}
        </div>
    );
};

export default SectionTitle;
