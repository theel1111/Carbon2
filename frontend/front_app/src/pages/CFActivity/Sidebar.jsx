// src/Component/Sidebar/Sidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) => pathname.startsWith(path);

  return (
    <div className={styles.iconColumn}>
      <button className={`${styles.iconBtn} ${isActive("/home") ? styles.active : ""}`} onClick={() => navigate("/home")}>Home</button>
      <button className={`${styles.iconBtn} ${isActive("/product") ? styles.active : ""}`} onClick={() => navigate("/product")}>Product</button>
      <button className={`${styles.iconBtn} ${isActive("/cf-activity") ? styles.active : ""}`}>CF</button>
      <button className={styles.iconBtn}>CFV</button>
      <button className={styles.iconBtn}>Record</button>
      <button className={styles.iconBtn}>權限管理</button>
      <button className={styles.iconBtn}>進度查核</button>
    </div>
  );
};

export default Sidebar;
