import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { PictureOutlined, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {

  const { chatId, creds } = props;

  const [value, setValue] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();

    const text = value.trim();

    if(text.length > 0)  sendMessage(creds, chatId, { text });
    
  };
  const handleChange = (e) =>{
    setValue(e.target.value);
    isTyping(props, chatId)
  };
  const handleUpload = (e) =>{
    sendMessage(creds, chatId, { files: e.target.files, text: ""  })
  }

  return ( 
    <div className="message-form" onSubmit ={handleSubmit}>
      <input className="message-input" placeholder="Send message"
      value={value} onChange={handleChange} 
      onSubmit={handleSubmit} 
     />
     <label htmlFor = "upload-button">
       <span className="image-button">
          < PictureOutlined className="picture-icon"/>
       </span>
     </label>
     <input 
      type ="file" multiple={false} id="upload-button"
      style={{ display: 'none' }} onChange ={handleUpload}
     />
     <button type="submit" className="send-button">
       < SendOutlined className="sen-icon" />

     </button>
    </div>
   );
}
 
export default MessageForm;