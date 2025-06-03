import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function UserLogout() {
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    console.log(token);
      axios.get(`${import.meta.env.VITE_BASE_API}/users/logout`, {
        headers:{
         Authorization :`Bearer ${token}`  
        }
    }).then((response)=>{
        if(response.status===200){
            localStorage.removeItem("token");
        }
        console.log("works");
        navigate("/home");
    });

  return (
    <div>
      User Logout
    </div>
  )
}

export default UserLogout

