import { useState } from "react";
import styles from "../App.module.css";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up:", { username, password });
    if (username && password) {
        alert("Sign up successful!");
        navigate("/login"); // 註冊成功後跳轉到登入頁面
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <div className={styles["signup-left"]}>
        <h1 className={styles["brand-logo"]}>Carbonnn</h1>
      </div>
      <div className={styles["signup-right"]}>
        <form onSubmit={handleSignUp} className={styles["signup-form"]}>
          <h2 className={styles["form-title"]}>Create your account</h2>
          <label className={styles["text"]}>Username</label>
          <input
            type="text"
            className={styles["form-input"]}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={styles["text"]}>Password</label>
          <div className={styles["password-container"]}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles["form-input"]}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles["password-toggle"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="mt-2">
            <label className={styles["checkbox-label"]}>
                <input type="checkbox" />
                    I agree to the terms of service and privacy policy
            </label>
            </div>
          <button type="submit" className={styles["signup-button"]}>
            Sign up
          </button>
          <div className={styles["divider"]}>
            <span>--------------------------    or sign in with    --------------------------</span>
          </div>
          <button
                className={styles["google-login-button"]}>
                <img src="/assets/images.png" className={styles["logo"]}/> Google
            </button>
          <p className={styles["already-account"]}>
            Already have an account? <a href="/login" className={styles["signin-link"]}>Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}