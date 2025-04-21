// src/pages/CFActivityForm.jsx
import React, { useState } from "react";
import styles from "./CFActivityForm.module.css";
import LifecycleNav from "./Nav";   // 路徑請依實際放置調整
// 若 Router 已設好，請在 App.jsx 增加 <Route path="/cf-activity" element={<CFActivityForm />} />

const initialForm = {
  stage: "raw_material",
  project_name: "",
  value: "",
  unit: "",
  factor_id: "",
  transport_origin: "",
  transport_method: "",
  distance_per_trip: "",
  transport_unit: "",
  usage_ratio: "",
  allocation_basis: "",
  fuel_input_per_unit: "",
  fuel_input_unit: "",
  land_transport_tkm: "",
  note: "",
};

const CFActivityForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStageChange = (stage) =>
    setForm((prev) => ({ ...prev, stage }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 呼叫 API
    console.log("Submit CF Activity:", form);
    alert("已送出！");
    setForm(initialForm);
  };

  return (
    <div className={styles.container}>
      {/* 左側生命週期階段選單 */}
      <LifecycleNav current={form.stage} onChange={handleStageChange} />

      {/* 右側表單 */}
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>產品型盤查資料填寫</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* 基本欄位 */}
          <div className={styles.row}>
            <label>項目名稱</label>
            <input
              name="project_name"
              value={form.project_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.row}>
              <label>數值</label>
              <input
                type="number"
                step="any"
                name="value"
                value={form.value}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.row}>
              <label>單位</label>
              <input
                name="unit"
                value={form.unit}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <label>排放因子 ID</label>
            <input
              name="factor_id"
              value={form.factor_id}
              onChange={handleChange}
            />
          </div>

          {/* 依階段顯示額外欄位（最簡做法：全部顯示） */}
          <fieldset className={styles.group}>
            <legend>運輸相關</legend>

            <div className={styles.rowGroup}>
              <div className={styles.row}>
                <label>起運地</label>
                <input
                  name="transport_origin"
                  value={form.transport_origin}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.row}>
                <label>運輸方式</label>
                <input
                  name="transport_method"
                  value={form.transport_method}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.rowGroup}>
              <div className={styles.row}>
                <label>每趟距離</label>
                <input
                  type="number"
                  step="any"
                  name="distance_per_trip"
                  value={form.distance_per_trip}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.row}>
                <label>距離單位</label>
                <input
                  name="transport_unit"
                  value={form.transport_unit}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className={styles.group}>
            <legend>使用/燃料</legend>

            <div className={styles.rowGroup}>
              <div className={styles.row}>
                <label>使用比例 (%)</label>
                <input
                  type="number"
                  step="any"
                  name="usage_ratio"
                  value={form.usage_ratio}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.row}>
                <label>Allocation Basis</label>
                <input
                  name="allocation_basis"
                  value={form.allocation_basis}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.rowGroup}>
              <div className={styles.row}>
                <label>燃料投入量</label>
                <input
                  type="number"
                  step="any"
                  name="fuel_input_per_unit"
                  value={form.fuel_input_per_unit}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.row}>
                <label>燃料單位</label>
                <input
                  name="fuel_input_unit"
                  value={form.fuel_input_unit}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.row}>
              <label>陸運 t‑km</label>
              <input
                type="number"
                step="any"
                name="land_transport_tkm"
                value={form.land_transport_tkm}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <div className={styles.row}>
            <label>備註</label>
            <textarea
              rows="3"
              name="note"
              value={form.note}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            儲存
          </button>
        </form>
      </div>
    </div>
  );
};

export default CFActivityForm;
