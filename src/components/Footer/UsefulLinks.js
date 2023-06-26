import { Link } from "react-router-dom";

import styles from "./UsefulLinks.module.scss";

const UsefulLinks = () => {
    return (
        <ul className={styles.links}>
            <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
                <Link to="/sitemap">Sitemap</Link>
            </li>
        </ul>
    );
};

export default UsefulLinks;
