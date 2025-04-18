import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Outlet, unstable_setDevServerHooks,Navigate } from 'react-router-dom'
import { auth } from '../firebase';
import Loader from "./loader"

const Protected = () => {
const [user,setUser]=useState(undefined);
    
    useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
    setUser(user ? user:null)
   })
},[]);

if(user===undefined) return <Loader/>;

if(user===null) return <Navigate to="/" replace/>;
  return <Outlet context={user}/>;
}

export default Protected;
