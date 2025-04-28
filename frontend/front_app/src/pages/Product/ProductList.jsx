// src/pages/Product/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";
import ProductModal from "./ProductModal";
import CarbonReportModal from '../../Component/common/CarbonReportModal';
import handleDownload from '../../Component/common/DownloadReport';
import SidebarLayout from "../../Component/Layout/SidebarLayout";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const surveyData = {
    surveyId: 'CARBON-20240420',
    surveyName: '公司年度碳排盤查'
  };
  const navigate = useNavigate();

  // 取得產品清單
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // 刪除產品
  const handleDelete = async (productId) => {
    if (!window.confirm("確定要刪除這項產品嗎？")) return;
    await fetch(`/api/product/${productId}`, {
      method: "DELETE",
    });
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <SidebarLayout>
      <div className={styles.container}>
        {/* 頁首 */}
        <div className={styles.header}>
          <h2>產品列表</h2>
          <div className={styles.buttonGroup}>
            <button onClick={() => setShowModal(true)} className={styles.createBtn}>
              + 新增產品
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className={styles.reportBtn}
            >
              + 碳盤查報表
            </button>
          </div>
        </div>

        {/* 產品表格 */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>產品 ID</th>
              <th>產品名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="3">目前尚無產品</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <button onClick={() => navigate(`/product/${product.id}`)}>查看</button>
                    <button onClick={() => navigate(`/product/edit/${product.id}`)}>編輯</button>
                    <button onClick={() => handleDelete(product.id)} className={styles.deleteBtn}>刪除</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* 新增產品彈窗 */}
        {showModal && (
          <ProductModal
            onClose={() => setShowModal(false)}
            onCreated={(newProduct) => setProducts((prev) => [...prev, newProduct])}
          />
        )}
        <CarbonReportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          surveyData={surveyData}
          onDownload={handleDownload}
        />
      </div>
    </SidebarLayout>
  );
};

export default ProductList;