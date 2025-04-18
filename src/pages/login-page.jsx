import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from "../firebase"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const LoginPage = () => {
  const navigate=useNavigate();

    const handleLogin=()=>{
       signInWithPopup(auth,provider)
       .then((res)=>{toast.success("Giriş Yapıldı")
      navigate("/room")
        
    })
       .catch((err)=>toast.error("hata oluştu",err.message))
    }
  return (
    <div className='wrapper'>
     <div className='box h-[450px] flex flex-col justify-center items-center gap-[50px]'>
      <h1 className='text-4xl'>Chat Odası</h1>

      <p className='text-gray-400'>Devam Etmek İçin Giriş Yapın</p>

      <button onClick={handleLogin}
      className='flex gap-5 items-center'>
        <img src="public/google.png" alt="" className='w-[30px]' />
        <span>Google İle Gir</span>
      </button>
     </div>
    </div>
  )
}

export default LoginPage;
