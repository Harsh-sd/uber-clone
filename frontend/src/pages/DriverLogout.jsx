import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function DriverLogout() {
    const navigate=useNavigate();
    const token=localStorage.getItem("drivertoken");
      axios.get(`${import.meta.env.VITE_BASE_API}/drivers/logout`, {
        headers:{
         Authorization :`Bearer ${token}`  
        }
    }).then((response)=>{
        if(response.status===200){
            localStorage.removeItem("drivertoken");
        }
        console.log("works");
        navigate("/driverhome");
    });
  return (
    <div>
      driverlogout
    </div>
  )
}

export default DriverLogout
