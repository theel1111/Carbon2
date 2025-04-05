import React, { useState } from "react";
import styles from "../../App.module.css";
import InputField from "../InputField";
import CheckboxField from "../CheckboxField";
import SubmitButton from "../SubmitButton";
import SocialLogin from "../SocialLogin";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", username, password);
    };

    return (
        <form onSubmit={handleLogin}>
            <InputField
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles["flex-container"]}>
                <label className={styles["text"]}>Password</label>
                <a href="#" className={styles["hyperlink"]}>
                Forgot your password?
                </a>
            </div>
            <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <CheckboxField label="Remember this device" />
            <SubmitButton text="Sign in" />
            <SocialLogin />
        </form>
    );
};

export default LoginForm;