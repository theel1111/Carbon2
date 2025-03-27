import {useState, useEffect} from 'react';
import { Channel } from './Component/Channel/channel';
import  Login  from './pages/Login';
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
    <div className="App">
      {isLoggedIn ? (
        <Channel data={initialState} />
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
