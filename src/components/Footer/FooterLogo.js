import styles from "./FooterLogo.module.scss";

import logo from "../../assets/light/logos/logo-mono.svg";

const FooterLogo = () => {
    return <img src={logo} alt="Guilherme Logo" className={styles.logo} />;
};

export default FooterLogo;
