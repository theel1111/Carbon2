// src/Component/Layout/SidebarLayout.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./SidebarLayout.module.css";

const SidebarLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
