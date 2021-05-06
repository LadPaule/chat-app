import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
 const App = () => {

  if(!localStorage.getItem('username')) {
    return< LoginForm />
  }
   return ( 

     <ChatEngine
      height = "100vh" projectID ="8821ebeb-34a9-4f32-8219-b86686f3742e"
      userName ={localStorage.getItem('username')} userSecret ={localStorage.getItem('password')}
      renderChatFeed ={(chatAppProps)=> <ChatFeed { ...chatAppProps } />}

     />
    );
 }
  
 export default App;
