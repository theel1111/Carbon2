// import React, { useState } from "react";
import React from "react";
import {useForm} from "react-hook-form";
import styles from "../../App.module.css";
import InputField from "../../Component/common/InputField";
import CheckboxField from "../../Component/common/CheckboxField";
import SubmitButton from "../../Component/common/SubmitButton";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                label="Username"
                type="text"
                {...register("username", { required: "請輸入帳號" })} //required:true
            />
            {errors.username && <span className={styles["error"]}>{errors.username.message}</span>}

            <div className={styles["flex-container"]}>
                <label className={styles["text"]}>Password</label>
                <a href="#" className={styles["hyperlink"]}>
                Forgot your password?
                </a>
            </div>
            <InputField
                type="password"
                {...register("password", { required: "請輸入密碼" })} //required:true
            />
            {errors.password && <span className={styles["error"]}>{errors.password.message}</span>}

            <CheckboxField 
                label="Remember this device" 
                {...register("remember")} 
            />
            <SubmitButton text="Sign in" />
            <SocialLogin />
        </form>
    );
};

// export default LoginForm;

// const LoginForm = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log("Logging in with", username, password);
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <InputField
//                 label="Username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <div className={styles["flex-container"]}>
//                 <label className={styles["text"]}>Password</label>
//                 <a href="#" className={styles["hyperlink"]}>
//                 Forgot your password?
//                 </a>
//             </div>
//             <InputField
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <CheckboxField label="Remember this device" />
//             <SubmitButton text="Sign in" />
//             <SocialLogin />
//         </form>
//     );
// };

export default LoginForm;