import React from "react";
import styles from "../App.module.css";
import LoginHeader from "../Component/Login/LoginHeader";
import LoginForm from "../Component/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className={styles["login-page"]}>
        <div className={styles["login-page form"]}>
            <LoginHeader/>
            <LoginForm/>
        </div>
    </div>
  );
}
