import {useState, useEffect} from 'react';
import { Channel } from './Component/Channel/channel'
import './App.css';

function App() {
  const [initialState, setState ] = useState([])
  const url = "/api"

  useEffect(()=> {
    fetch(url).then(response => {
      if(response.status == 200){
        return response.json()
      }
    }).then(data => setState(data))
  }, [])

  return (
    <div className="App">
       <Channel data={initialState}/>
    </div>
  );
}

export default App;
