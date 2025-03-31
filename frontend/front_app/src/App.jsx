import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Channel } from './Component/Channel/channel';
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';
import './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialState, setState ] = useState([]);
  const url = "/api";

  useEffect(()=> {
    if (isLoggedIn) {
      fetch(url).then(response => {
        if(response.status == 200){
          return response.json();
        }
      }).then(data => setState(data));
    }
  }, [isLoggedIn])

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect to login if not logged in */}
          <Route path="/" element={isLoggedIn ? <Channel data={initialState}/> : <Navigate to="/login" />} />        
          
          {/* Signup page */}
          <Route>
            <Route path="/signup" element={<SignUp />} />
          </Route>
          
          {/* Login page */}
          <Route>
            <Route path="/login" element={<Login onLogin={setIsLoggedIn}/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
