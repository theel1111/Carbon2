import React from "react";
import styles from "../../App.module.css";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

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