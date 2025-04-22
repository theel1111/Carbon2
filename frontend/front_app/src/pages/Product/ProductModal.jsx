// src/pages/Product/ProductModal.jsx
import React, { useState } from "react";
import styles from "./ProductList.module.css";

const ProductModal = ({ onClose, onCreated }) => {
  const [form, setForm] = useState({
    product_name: "",
    product_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 假設 company_id 由後端透過 session/context 處理
    const response = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      const newProduct = await response.json();
      onCreated(newProduct); // 回傳給 parent 更新列表
      onClose();
    } else {
      alert("新增產品失敗");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>新增產品</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label>產品名稱</label>
            <input
              type="text"
              name="product_name"
              value={form.product_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>產品類型</label>
            <input
              type="text"
              name="product_type"
              value={form.product_type}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose}>取消</button>
            <button type="submit" className={styles.createBtn}>確認新增</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
