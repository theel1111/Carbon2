// import React, { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../../App.module.css";
import InputField from "../../Component/common/InputField";
import CheckboxField from "../../Component/common/CheckboxField";
import SubmitButton from "../../Component/common/SubmitButton";
import SocialLogin from "../Login/SocialLogin";


const SignupForm = () => {
    const { register, handleSubmit, formState: {errors, isValid} } = useForm({
        mode: "onChange" // onChange時就驗證
    });
    
    const navigate = useNavigate(); // useNavigate hook to programmatically navigate
    
    const onSubmit = (data) => {
        console.log(data);
        navigate("/"); // Redirect to the signin page after successful signup
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles["form-title"]}>
                Create your account
            </h2>
            <InputField
                label="Username"
                type="text"
                {...register("username", { 
                    required: "請輸入帳號" 
                })} //required:true
            />
            {errors.username && <span className={styles["error"]}>{errors.username.message}</span>}
            
            <div className={styles["flex-container"]}>
                <label className={styles["text"]}>Password</label>
            </div>
            <InputField
                type="password"
                {...register("password", { 
                    required: "請輸入密碼",
                    minLength: { value: 6, message: "密碼至少6位數" }
                })}
            />
            {errors.password && <span className={styles["error"]}>{errors.password.message}</span>}

            <CheckboxField 
                label="Remember this device"
                {...register("remember")}
            />
            <SubmitButton 
                text="Sign up"
                disabled={!isValid} // Disable the button if the form is not valid
            />
            <SocialLogin />
            <p className={styles["already-account"]}>
                Already have an account? <a href="/" className={styles["signin-link"]}>Sign in</a>
            </p>
        </form>
    );
}

// const SignupForm = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSignup = (e) => {
//         e.preventDefault();
//         console.log("Sign up with", username, password);
//     };

//     return (
//         <form onSubmit={handleSignup}>
//             <h2 className={styles["form-title"]}>
//                 Create your account
//             </h2>
//             <InputField
//                 label="Username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <div className={styles["flex-container"]}>
//                 <label className={styles["text"]}>Password</label>
//             </div>
//             <InputField
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <CheckboxField label="Remember this device" />
//             <SubmitButton text="Sign up" />
//             <SocialLogin />
//             <p className={styles["already-account"]}>
//                 Already have an account? <a href="/" className={styles["signin-link"]}>Sign in</a>
//             </p>
//         </form>
//     );
// }

export default SignupForm;