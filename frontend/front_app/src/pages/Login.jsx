import { useState } from "react";
/* import { FaGoogle } from "react-icons/fa"; */
import styles from "../App.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", username, password);
  };

  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-page form"]}>
        <form onSubmit={handleLogin}>
            <h1 className={styles["quantico-bold"]}>
                Carbonnn
            </h1>
            <p className={styles["welcome-text"]
            }>
                Welcome back to Carbonnn.
            </p>
            <label className={styles["text"]}>
                New here?
                <a href="#" className={styles["hyperlink"]}>
                    Create an account.
                </a>
            </label>
            <label className={styles["text"]}>
                    Username
            </label>
            <div>
                <input
                type="text"
                className={styles["login-page input"]}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className={styles["flex-container"]}>
                <span className={styles["text"]}>Password</span>
                <a href="#" className={styles["hyperlink"]}>
                    Forgot your password?
                </a>
            </div>
            <div className="mt-4">
                <input
                type="password"
                className={styles["login-page input"]}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mt-2">
                <label className={styles["checkbox-label"]}>
                    <input type="checkbox" />
                    Remember this device
                </label>
            </div>
            <button
                type="submit"
                className={styles["login-page-button"]}>
                Sign in
            </button>
            <div className={`${styles["text"]} ${styles["text-center"]}`}>
                --------------------------    or sign in with    --------------------------
            </div>
            <div>
                <button
                    className={styles["google-login-button"]}>
                    <img src="/assets/images.png" className={styles["logo"]}/> Google
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}