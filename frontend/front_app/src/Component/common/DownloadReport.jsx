// import * as XLSX from 'xlsx';

// export default async function handleDownload(finalData) {
//   try {
//     // Step 1: 載入原始檔案
//     const response = await fetch('/assets/report.xlsx'); 
//     console.log('Fetch response:', response);

//     if (!response.ok) {
//         throw new Error('載入檔案失敗');
//     }      
//     const arrayBuffer = await response.arrayBuffer();
//     const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//     console.log('Workbook:', workbook);

//     // Step 2: 找到要改的工作表
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     console.log('Worksheet:', worksheet);

//     // Step 3: 填資料到 C2
//     XLSX.utils.sheet_add_aoa(worksheet, [
//       [finalData.surveyName] 
//     ], { origin: "C2" });

//     // Step 4: 產生新檔案
//     const newWorkbookBlob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });
//     console.log('Generated Blob:', newWorkbookBlob);

//     console.log('要下載的資料：', finalData);
//     alert(`下載報表類型：${finalData.reportType}\n編號：${finalData.surveyId}\n名稱：${finalData.surveyName}`);

//     // Step 5: 下載
//     const url = URL.createObjectURL(newWorkbookBlob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${finalData.surveyName || 'report'}.xlsx`;
//     a.click();
//     URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error('下載失敗', error);
//     alert('產生報表失敗，請稍後再試!');
//   }
// }
export default async function handleDownload(finalData) {
    try {
      // Step 1: 檢查檔案路徑
      const fileUrl = '/assets/report.xlsx'; // 檔案的靜態路徑
      console.log('下載檔案 URL:', fileUrl);
  
      // Step 2: 建立下載連結
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = `${finalData.surveyName || 'report'}.xlsx`;
      a.click();
  
      // Step 3: 提示下載成功
      alert(`檔案已開始下載：${finalData.surveyName || 'report'}.xlsx`);
    } catch (error) {
      console.error('下載失敗', error);
      alert('下載失敗，請稍後再試！');
    }
}