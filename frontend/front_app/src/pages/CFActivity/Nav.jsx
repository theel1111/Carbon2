// src/Component/CF/LifecycleNav.jsx
import React from "react";
import styles from "./Nav.module.css";   // 建議獨立也可以併入 Form 的 css

/**
 * 五大生命週期階段側邊導覽
 * @param {string}   current   目前選取的 stage
 * @param {function} onChange  點擊階段時呼叫 (stage) => void
 */
const stages = [
  { key: "raw_material", label: "原材料階段" },
  { key: "manufacturing", label: "生產階段" },
  { key: "transportation", label: "運輸階段" },
  { key: "usage", label: "使用階段" },
  { key: "disposal", label: "廢棄階段" },
];

const LifecycleNav = ({ current, onChange }) => (
  <ul className={styles.nav}>
    {stages.map(({ key, label }) => (
      <li
        key={key}
        className={`${styles.item} ${current === key ? styles.active : ""}`}
        onClick={() => onChange(key)}
      >
        {label}
      </li>
    ))}
  </ul>
);

export default LifecycleNav;
