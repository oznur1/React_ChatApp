import React from 'react'
import { useOutletContext } from 'react-router-dom';

const ChatPage = () => {
  const user=useOutletContext
  return (
    <div className='wrapper'>
      <div className='box'>
        <h1 className='text-2xl text-center font-semibold'>SOHBET SAYFASI</h1>
      </div>
    </div>
  )
}

export default ChatPage;
