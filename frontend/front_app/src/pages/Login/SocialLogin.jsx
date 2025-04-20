import React from "react";
import styles from "../../App.module.css";

const SocialLogin = () => {
  return (
    <div className={styles["social-login"]}>
      <div class={styles["divider"]}>
        <span class={styles["line"]}></span>
        <span class={styles["text"]}>
          or sign in with
        </span>
        <span class={styles["line"]}></span>
      </div>
      <button className={styles["google-login-button"]}>
        <img src="/assets/images.png" className={styles["logo"]} alt="Google" /> 
        Google
      </button>
    </div>
  );
};

export default SocialLogin;