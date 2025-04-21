import React from 'react'
import {  useOutletContext, useParams } from 'react-router-dom';
import Header from '../components/header';
import List from '../components/list';
import Form from '../components/form';

const ChatPage = () => {
 
  const user=useOutletContext
  const {room}=useParams();
  console.log(room,user.displayName)
  
  
  return (
    <div className='h-screen md:grid md:place-items-center'>
      <div className='bg-white text-grey md-w-[80vw] md:max-w-[600px] h-screen md:rounded-md overflow-hidden flex flex-col'>
       <Header user={user} room={room}/>
       <Form user={user} room={room}/>
       <List/>
      </div>
    </div>
  )
}

export default ChatPage;
