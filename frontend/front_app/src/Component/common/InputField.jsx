import React from "react";
import styles from "../../App.module.css";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className={styles["input-field"]}>
      <label className={styles["text"]}>{label}</label>
      <input
        type={type}
        className={styles["form-input"]}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;