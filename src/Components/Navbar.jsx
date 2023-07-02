import React, { useContext, useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import {Link, useNavigate} from "react-router-dom";
import { Contextsfetch } from '../context/Contexts';
import {MdDarkMode} from "react-icons/md"
const Navbar = () => {
const [theme,setTheme]=useState("light-theme");
  const toggleTheme=()=>{
    // alert("hii")
if(theme==="dark-theme"){
  setTheme("light-them");
}else{
  setTheme("dark-theme")
}
  }
useEffect(()=>{
  document.body.className=theme;
},[theme]);

  
  const {isAuth,logout}=useContext(Contextsfetch)
  const navigate= useNavigate();
  const handleLogin=() =>{
    if (isAuth){
      logout();
    }
    else{
      navigate("/login")
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.imgcontain}>
    
         <div>Listed</div>
      </div>
      <div>
      <MdDarkMode onClick={()=>toggleTheme()}/>

      </div>
      <div className={styles.btncontain}>
       
      <button onClick={handleLogin}  >
            {isAuth ? "logout" : "Login" }
        </button>
      </div>
    </div>
  )
}

export default Navbar
