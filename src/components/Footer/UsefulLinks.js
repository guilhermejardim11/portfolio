import { Link } from "react-router-dom";

import styles from "./UsefulLinks.module.scss";

const UsefulLinks = () => {
    return (
        <ul className={styles.links}>
            <li>
                <Link to="/portfolio/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/portfolio/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
                <Link to="/portfolio/sitemap">Sitemap</Link>
            </li>
        </ul>
    );
};

export default UsefulLinks;
