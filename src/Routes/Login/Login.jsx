import React, { useContext, useState } from 'react'
import { Contextsfetch } from '../../context/Contexts';

import styles from "./Login.module.css"
const Login = () => {
  const [email1, setEmail]=useState();
  const [pass1, setPass]=useState();
  const {login, isAuth}=useContext(Contextsfetch);

  const handleSubmit =(e)=>{
      e.preventDefault();
      let getmail= JSON.parse(localStorage.getItem("useremails"));
      let getpass= JSON.parse(localStorage.getItem("userpass"));
      if(getmail === email1 && getpass === pass1){
          alert("Sign In successfully");
          login();
      }
      else{
          alert("Sign In failed");
      }
  };
    
  return (
    <div className={styles.maincomponents}>


    <div className={styles.boardh1}>
      <h1>Board</h1>
    </div>
  
      <form className={styles.logincontain} onSubmit={handleSubmit}>
     <div className={styles.signacc}>
     <h2>Sign In</h2>
        <p>Sign in to your account</p>
     </div>
     
         
         <div className={styles.googsign}>
         <div className={styles.googsignf}>
         <div className={styles.imgs} >
          <img src='https://cdn-teams-slug.flaticon.com/google.jpg'/>
         </div>
          <div>
            <p>
              Sign in with Google
            </p>
          </div>
          </div>


          <div className={styles.googsigns}>
         <div className={styles.imgs}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvyCrxhPWAT91ai9feyin10pjuJvT_ScENXyh5HLX0yxAgFbRjf9eH4BseQGYvkJkRKM&usqp=CAU"/>
         </div>
          <div>
            <p>
              Sign in with Apple
            </p>
          </div>
          </div>
         </div>
        <div className={styles.emaildiv}>
        
        <div className={styles.emailhead}><p>Email address</p> </div>
        
        <div className={styles.email}> 
   
          <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
         </div>
         <div className={styles.passhead}><p>Password</p> </div>

        <div className={styles.pass}>

        <input type="password" placeholder='Enter Password' onChange={(e)=>{setPass(e.target.value)}}/>
         <div className={styles.forgotpass}> <p>Forgot password ?</p></div>
        </div>
        <div className={styles.submit}>
            <input type="submit"/>
        </div>

          
        </div>
      </form>
    </div>
  )
}

export default Login
