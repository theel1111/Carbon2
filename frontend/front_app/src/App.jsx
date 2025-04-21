import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Channel } from './Component/Channel/channel';
import Login from './pages/Login';
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import CFActivityForm from "./pages/CFActivity/CFActivityForm";
import './App.module.css';

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
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={setIsLoggedIn} />
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cf-activity" element={<CFActivityForm />} />
      </Routes>
    </Router>
  );
}

export default App;
