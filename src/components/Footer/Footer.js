import styles from "./Footer.module.scss";

import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import Socials from "../Socials/Socials";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FooterLogo />
            <Copyright />
            <Socials />
            <UsefulLinks />
        </footer>
    );
};

export default Footer;
