// src/pages/Home.jsx
import React, { useState } from "react";
import styles from "./Home.module.css";
import CarbonReportModal from '../Component/common/CarbonReportModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const surveyData = {
    surveyId: 'CARBON-20240420',
    surveyName: '公司年度碳排盤查'
  };
  const handleDownload = (data) => {
    console.log('要下載的資料：', data);
    alert(`下載報表類型：${data.reportType}\n編號：${data.surveyId}\n名稱：${data.surveyName}`);
  };

  return (
    <div className={styles.container}>
      {/* 側邊欄 */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <button className={styles.active}>Home</button>
          <button>Record</button>
          <button>Record</button>
          <button>Record</button>
          <button>權限管理</button>
          <button>進度查核</button>
        </nav>
        <button className={styles.logout}>Logout</button>
      </aside>

      {/* 主要內容 */}
      <main className={styles.main}>
        {/* 上方：用 flex 展示 圖表 + 碳足跡 */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h2>Hi, User</h2>
            <p>您現在的登入身分是：</p>
          </div>
          <div className={styles.rightHeader}>
            <input type="text" placeholder="Search" className={styles.search} />
            <button className={styles.setting}>Setting</button>
          </div>
        </header>

        <section className={styles.topRow}>
          <div className={styles.chart}>各廠區排放百分比（圓餅圖）</div>
          <div className={styles.footprint}>
            <p>產品碳足跡</p>
            <p>產品名稱：</p>
            <div className={styles.footprintImage}>135g CO₂</div>
          </div>
        </section>

        {/* 中間：左邊兩大按鈕 + 右邊紀錄表 */}
        <section className={styles.middleRow}>
          {/* 左欄：新增產品/組織 */}
          <div className={styles.leftColumn}>
            <div className={styles.productStep}>
              <p>新增產品型盤查</p>
              <img src="#" alt="產品生命周期圖" />
            </div>
            <div className={styles.orgStep}>
              <p>新增組織型盤查</p>
              <img src="#" alt="組織型盤查圖" />
            </div>
          </div>
          {/* 右欄：盤查紀錄表格 */}
          <div className={styles.rightColumn}>
            <div className={styles.recordTable}>
              <h3>盤查紀錄</h3>
              <div className="p-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  產生碳盤查報表
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>編號</th>
                    <th>名稱</th>
                    <th>類型</th>
                    <th>盤查說明</th>
                    <th>更新時間</th>
                    <th>盤查項目</th>
                    <th>狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7">（尚無資料）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <CarbonReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        surveyData={surveyData}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default Home;
