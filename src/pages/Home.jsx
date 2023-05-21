import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
export default function Home(){
  const navigate=useNavigate()
  const [localData ,setLocalData]=useState(JSON.parse(localStorage.getItem('detail')) ||'')
  // let detailFromLocal=JSON.parse(localStorage.getItem('detail')) ||''
  return(
    <>
    
 <nav>
   <li onClick={()=>{navigate('/')}}>Home</li>
    <li onClick={()=>{navigate('/task')}}>Task</li>
    <li onClick={()=>{navigate('/contact')}}>Contact</li>
  </nav>


  <h1>Welcome {localData.fName} {localData.lName}</h1>
  <button onClick={()=>{localStorage.removeItem('detail')
setLocalData('')}}>Clear</button>

    </>
  )
}