import styles from "./Link.module.scss";

export default function Header(props) {
    const { link, children } = props;
    return (
        <details className={styles.details}>
            <summary className={styles.link}>
                {link}
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                    >
                        <path
                            fill="none"
                            stroke="#FF7B86"
                            stroke-width="2"
                            d="M1 1l4 4 4-4"
                        />
                    </svg>
                </span>
            </summary>
            <div className={styles.link_details}>{children}</div>
        </details>
    );
}
