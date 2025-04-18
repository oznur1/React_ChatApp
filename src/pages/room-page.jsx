import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, useOutletContext } from 'react-router-dom';

const RoomPage = () => {
  const user=useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const room = e.target[0].value.toLowerCase().replaceAll(" ", "-");
    navigate(`/chat/${room}`);
  };

  const handleLogout=()=>{
    signOut(auth);
  }

  return (
    <div className='wrapper'>
      <form
        onSubmit={handleSubmit}
        className='box rounded-[10px] flex flex-col gap-10 text-center'
      >
        <h1 className='text-4xl'>Chat Odası</h1>
        <p className='text-zinc-500'>Selam {user.displayName}, <br/>Hangi Odaya Gireceksiniz?</p>

        <input 
        placeholder='örn:haftaiçi'
          type='text'
          className='border border-gray-300 rounded-md shadow-lg p-2 px-4'
        />
        <button type='submit' className='bg-zinc-700 text-white'>
          Odaya Gir
        </button>

        <button
          type='button'
          className='bg-red-500 text-white'
          onClick={handleLogout}
        >
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
