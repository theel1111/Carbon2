import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../App.module.css";

const SubmitButton = ({ text, href, disabled }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href);
  };
  return (
    <button 
      onClick={handleClick}
      className={styles["submit-button"]}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SubmitButton;