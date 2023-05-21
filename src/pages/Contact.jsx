import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import {TextField,Button} from '@mui/material';
export default function Contact(){
  
  const navigate=useNavigate()
  const [detail,setDetail]=useState({fName:'',lName:'',email:'',phone:''})
  function handleName(e){
   
    console.log(detail)
  }
  return(
    <>
    <nav>
    <li onClick={()=>{navigate('/')}}>Home</li>
    <li onClick={()=>{navigate('/task')}}>Task</li>
    <li onClick={()=>{navigate('/contact')}}>Contact</li>
  </nav>
  <br/>
    <div className='detail'>

  <TextField onChange={(e)=> setDetail({...detail,fName:`${e.target.value}`})} id="filled-basic" label="First Name"  />
  <TextField onChange={(e)=> setDetail({...detail,lName:`${e.target.value}`})} id="filled-basic" label="Last Name"  />
  <TextField onChange={(e)=> setDetail({...detail,email:`${e.target.value}`})} id="filled-basic" label="Email"  />
  <TextField onChange={(e)=> setDetail({...detail,phone:`${e.target.value}`})} id="filled-basic" label="Phone" type='number'  />
  <Button onClick={()=>{localStorage.setItem('detail',JSON.stringify(detail))}}> Click </Button>
    </div>
  
    </>
  )
}