import styles from "./Button.module.scss";

export default function Button(props) {
    const { title, type } = props;
    return (
        <button
            type="button"
            name="button"
            title="button"
            className={`${styles.button} ${styles[type]}`}
        >
            {title}
        </button>
    );
}
