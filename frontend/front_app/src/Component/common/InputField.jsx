import React from "react";
import styles from "../../App.module.css";

//改成forwardref，因為react-hook-form用ref綁表單
const InputField = React.forwardRef(({ label, type, ...rest}, ref) => (
  <div className={styles["input-field"]}>
    <label className={styles["text"]}>{label}</label>
    <input
      type={type}
      className={styles["form-input"]}
      ref={ref}
      {...rest}
    />
  </div>
));

// 避免 DevTools 顯示 Anonymous
InputField.displayName = "InputField";

// const InputField = ({ label, type, value, onChange }) => {
//   return (
//     <div className={styles["input-field"]}>
//       <label className={styles["text"]}>{label}</label>
//       <input
//         type={type}
//         className={styles["form-input"]}
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

export default InputField;