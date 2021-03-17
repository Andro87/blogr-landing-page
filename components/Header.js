import styles from "./Header.module.scss";

export default function Header(props) {
    const { children, type, theme } = props;
    return (
        <p className={`${styles.header} ${styles[type]} ${styles[theme]} `}>
            {children}
        </p>
    );
}
