import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Menu.module.scss";

import Socials from "../Socials/Socials";

const Menu = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        props.closeMenu(false);
    }, [pathname]);

    return (
        <menu className={`${styles.menu} ${props.isMenuOpen ? styles.open : ""}`} >
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Contacts
                </NavLink>
            </nav>

            <Socials className={styles.menu_socials} />
        </menu>
    );
};

export default Menu;
