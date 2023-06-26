import { Link } from "react-router-dom";

import styles from "./HeaderLogo.module.scss";

import logo from "../../assets/light/logos/logo.svg";

const HeaderLogo = () => {
    return (
        <Link to="/" className={styles.logo}>
            <img src={logo} alt="Guilherme Logo" />
        </Link>
    );
};

export default HeaderLogo;
