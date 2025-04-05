import React from "react";
import styles from "../App.module.css";

const SocialLogin = () => {
  return (
    <div className={styles["social-login"]}>
      <div className={`${styles["text"]} ${styles["text-center"]}`}>
        -------------------------- or sign in with ---------------------------
      </div>
      <button className={styles["google-login-button"]}>
        <img src="/assets/images.png" className={styles["logo"]} alt="Google" /> 
        Google
      </button>
    </div>
  );
};

export default SocialLogin;