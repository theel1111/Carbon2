// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Channel } from "./Component/Channel/channel";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.module.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialState, setState] = useState([]);
  const url = "/api";

  useEffect(() => {
    if (isLoggedIn) {
      fetch(url)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => setState(data));
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      {/* 透過 react-router-dom 來管理路由 */}
      <Router>
        <Routes>
          {/* 登入頁：傳入 onLogin，把 isLoggedIn 設為 true */}
          <Route
            path="/"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />

          {/* Home 頁：不管有沒有資料都能看 */}
          <Route path="/home" element={<Home />} />

          {/* Channel 頁：帶著 initialState 的資料顯示 */}
          <Route path="/channel" element={<Channel data={initialState} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
