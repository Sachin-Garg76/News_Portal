import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/landingpage/Navbar';
const NotFound = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        // navigate('/login');
    },[])
  return (
    <>
        <Navbar/>
        <h1>Not Found</h1>
    </>
  )
}

export default NotFound;
