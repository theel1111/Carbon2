// src/Component/Sidebar/Sidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

/**
 * 通用圓形側邊欄
 * 放在 <SidebarLayout> 之左側，所有頁面共用。
 */
const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 判斷目前路徑以便高亮對應按鈕
  const isActive = (path) => pathname.startsWith(path);

  return (
    <div className={styles.iconColumn}>
      <button
        className={`${styles.iconBtn} ${isActive("/home") ? styles.active : ""}`}
        onClick={() => navigate("/home")}
      >
        Home
      </button>

      <button
        className={`${styles.iconBtn} ${isActive("/product") ? styles.active : ""}`}
        onClick={() => navigate("/product")}
      >
        Product
      </button>

      {/* ✅ 新增 onClick 直接導向 cf-activity */}
      <button
        className={`${styles.iconBtn} ${isActive("/cf-activity") ? styles.active : ""}`}
        onClick={() => navigate("/cf-activity")}
      >
        CF
      </button>

      <button className={styles.iconBtn}>CFV</button>
      <button className={styles.iconBtn}>Record</button>
      <button className={styles.iconBtn}>權限管理</button>
      <button className={styles.iconBtn}>進度查核</button>
    </div>
  );
};

export default Sidebar;
