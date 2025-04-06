import React, { useState } from "react";
import styles from "../../App.module.css";
import InputField from "../common/InputField";
import CheckboxField from "../common/CheckboxField";
import SubmitButton from "../common/SubmitButton";
import SocialLogin from "../Login/SocialLogin";


const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Sign up with", username, password);
    };

    return (
        <form onSubmit={handleSignup}>
            <h2 className={styles["form-title"]}>
                Create your account
            </h2>
            <InputField
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles["flex-container"]}>
                <label className={styles["text"]}>Password</label>
            </div>
            <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <CheckboxField label="Remember this device" />
            <SubmitButton text="Sign up" />
            <SocialLogin />
            <p className={styles["already-account"]}>
                Already have an account? <a href="/" className={styles["signin-link"]}>Sign in</a>
            </p>
        </form>
    );
}

export default SignupForm;