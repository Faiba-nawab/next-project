import Loginform from '../components/form/Loginform'
import React from 'react'
import { useState } from 'react'

function index() 
{
 const [name,setName]=useState("")
   function handlePass(event)
   {
    const [name,setName]=useState("");
   console.log("name",name);
   const [password,setPassword]=useState("");
   console.log("password",password);
   function handleName(event)
   {
     setName(event.target.value);
      setPassword(event.target.value);
   }
   function handleSubmit()
 {
   if (password.length < 8)
   {
     alert("Monee 8 charcters venottooo...")
     return;
   }
   console.log('successssss.....');
 }
  return (
    <>
    <p>Enter your name</p>
    <input type= 'text' onChange={handleName}/>
    <p>Enter your password</p>
    <input type='password' onChange={handlePass}/>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    <Loginform formname={name} formpassword={password}/>
    </>
  )
}
}
export default index


