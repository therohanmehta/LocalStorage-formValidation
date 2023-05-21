import React from "react";
import "./style.css";
import Task from './pages/Task.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
export default function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/task' element={<Task/>} />
     <Route path='/contact' element={<Contact/>} />
     </Routes>
    </BrowserRouter>
</>
  );
}
