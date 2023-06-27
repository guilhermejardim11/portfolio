import styles from "./MenuButton.module.scss";

const MenuButton = (props) => {
    return (
        <button
            type="button"
            title="Open Menu"
            className={`${styles.menu_button} ${props.isMenuOpen ? styles.active : ""}`}
            onClick={props.onClick}
        >
            <div></div>
        </button>
    );
};

export default MenuButton;
