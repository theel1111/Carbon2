import React from "react";
import styles from "../../App.module.css";

const CheckboxField = React.forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles["checkbox-field"]}>
      <label className={styles["checkbox-label"]}>
        <input type="checkbox" ref={ref} {...rest} />
        {label}
      </label>
    </div>
  );
});

// 設定顯示名稱，避免 React DevTools 顯示 Anonymous
CheckboxField.displayName = "CheckboxField";

// const CheckboxField = ({ label }) => {
//   return (
//     <div className={styles["checkbox-field"]}>
//       <label className={styles["checkbox-label"]}>
//         <input type="checkbox" />
//         {label}
//       </label>
//     </div>
//   );
// };

export default CheckboxField;