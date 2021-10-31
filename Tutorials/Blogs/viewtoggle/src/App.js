import {React,useState} from 'react'
import CardView from "./Components/Card.js"
import './App.css';
import Table from './Components/Table.js';
import { BsCardText } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
function App() {
  const [view,setView] = useState(false)
  const toggleHandler =(e)=>{
    e.preventDefault();
    setView(true)
  }
  const toggleHandler1=(e)=>{
    e.preventDefault();
    setView(false)
  }
  return (
    <div className="App">
      {!view?<Table/>: <CardView/>}

       <div style={{marginTop:"5%"}}>
       <button size="100%" style={{backgroundColor:"#DCE5EC" }} onClick={toggleHandler1}>{<BsListUl/>}</button>
       <button size="100%" style={{backgroundColor:"#DCE5EC" }} onClick={toggleHandler}>{<BsCardText/>}</button>
       </div>
    </div>
  );
}

export default App;
