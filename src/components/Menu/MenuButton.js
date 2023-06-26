import styles from "./MenuButton.module.scss";

const MenuButton = (props) => {
    return (
        <button
            type="button"
            title="Open Menu"
            className={`${props.isMenuOpen ? styles.active : ""}`}
            onClick={props.onClick}
        >
            <div></div>
        </button>
    );
};

export default MenuButton;
