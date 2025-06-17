import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home()
{
  useEffect(async() => {
    const ax=await axios.post("http://192.168.77.13:3000/createdata",
      {
    "name":"Faiba",
    "city":"Kochi",
    "age":"19"
     }
    )
    console.log("Responce from server",ax);

},[]);
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
    <Loginform name={name}/>
    </> 
     );
  }
}