import './App.css';
import {useState,useEffect} from 'react'
import Todos from "./components/Todos"
import axios from "axios"
import PreLoader from "./components/PreLoader"

function App() {
  const [todos,setTodos]=useState([])

  useEffect(()=>{
     axios.get('http://localhost:3000').then((res)=>setTodos(res.data))
  },[])

  return (
    <div className="App">
      {
        todos ? <Todos todos={todos} /> : <PreLoader/>
      }
    </div>
  );
}

export default App;
