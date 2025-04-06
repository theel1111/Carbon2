import React from "react";
import styles from "../App.module.css";
import Form from "../Component/Signup/SignupForm";
import BrandLogo from "../Component/common/BrandLogo";

export default function SignUpPage() {
  return (
    <div className={styles["signup-container"]}>
        <BrandLogo/>
        <div className={styles["signup-right"]}>
          <Form/>
        </div>
    </div>
  );
}