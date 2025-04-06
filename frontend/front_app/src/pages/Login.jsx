import React from "react";
import styles from "../App.module.css";
import LoginHeader from "../Component/Login/LoginHeader";
import Form from "../Component/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className={styles["login-page"]}>
        <div className={styles["login-page form"]}>
            <LoginHeader/>
            <Form/>
        </div>
    </div>
  );
}