import React from "react";
import styles from "../../App.module.css";

const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className={styles["submit-button"]}>
      {text}
    </button>
  );
};

export default SubmitButton;