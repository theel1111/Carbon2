// components/CarbonReportModal.js
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import styles from "../../App.module.css";

export default function CarbonReportModal({ isOpen, onClose, onDownload, surveyData }) {
  const [selectedType, setSelectedType] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!selectedType) {
      alert('請先選擇報表種類！');
      return;
    }
    const finalData = { 
      reportType: selectedType, 
      surveyId: surveyData.surveyId, 
      surveyName: surveyData.surveyName 
    };
    onDownload(finalData);
    setSelectedType(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-[#fcf9f5] rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
            <button onClick={onClose} className="absolute top-3 right-3 text-red-500 text-lg">✕</button>
            <h2 className="text-center text-xl font-bold mb-6">產生碳盤查報表？</h2>

            {/* 報表類型選擇 */}
            <div className="flex justify-around items-center mb-6">
                {[
                    { type: '環境部', img: "/assets/epd.png" },
                    { type: '金管會', img: "/assets/fsc.png" },
                    { type: '自選設定', img: "/assets/filter.png"}
                ].map(({type, img}) => (
                    <div
                        key={type}
                        className={`flex flex-col items-center cursor-pointer p-2 rounded-lg transition ${
                            selectedType === type ? 'bg-blue-200 shadow-md' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedType(type)}
                    >
                        {/* icon */}
                        <img src={img} alt={type} className={styles["reportType"]} />

                        {/* label */}
                        <span className="text-xs text-center">{type}</span>
                    </div>
                ))}
            </div>

            {/* 盤查資訊，資料來源由父層傳入 */}
            <div className="bg-[#e6e0db] p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">盤查資訊</h3>

            <div className="mb-3">
                <label className="font-semibold mb-2">盤查編號</label>
                <div className="mt-1 p-2 rounded border bg-white">{surveyData?.surveyId || '無資料'}</div>
            </div>

            <div>
                <label className="font-semibold mb-2">盤查名稱</label>
                <div className="mt-1 p-2 rounded border bg-white">{surveyData?.surveyName || '無資料'}</div>
            </div>
            </div>

            {/* 操作按鈕 */}
            <div className="flex justify-between">
                <button
                    type="button"
                    className="bg-gray-400 text-white py-2 px-6 rounded-full"
                    onClick={() => alert('預覽功能待開發')}
                >
                    預覽
                </button>
                <button
                    type="submit"
                    className="bg-[#f48d7d] text-white py-2 px-6 rounded-full"
                    onClick={handleSubmit}
                >
                    下載碳盤查報表
                </button>
            </div>
        </div>
    </div>
  );
}
