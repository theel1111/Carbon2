import React from "react";
import styles from "../App.module.css";

const CheckboxField = ({ label }) => {
  return (
    <div className={styles["checkbox-field"]}>
      <label className={styles["checkbox-label"]}>
        <input type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;