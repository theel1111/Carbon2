import styles from "../../App.module.css";

const LoginHeader = () => {
    return (
        <form className={styles["login-header"]}>
            <h1 className={styles["quantico-bold"]}>
                Carbonnn
            </h1>
            <p className={styles["welcome-text"]}>
                Welcome back to Carbonnn.
            </p>
            <label className={styles["text"]}>
                New here?{" "}
                <a href="/signup" className={styles["hyperlink"]}>
                    Create an account.
                </a>
            </label>
        </form>
    );
};

export default LoginHeader;