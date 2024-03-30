// I want to make the chat component in the bottom have a text field with an emojis button to add emojis and a picture icon to add any documents
// as files or photos and has a send button to appear the message content in the middle div so in the middle we want a div container that appears all messages by this user and the other that he is in the chat with 
//So we need in the top profile picture of the other user and his username and I can click on it to go to his profile page 

import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.native);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload here
      console.log('File uploaded:', file);
    }
  };

  return (
    <div className="chat-container">
      <div className="user-info" onClick={() => console.log('Go to profile')}>
        {/* Replace with actual profile image path */}
        <img src="/path-to-other-user-profile.jpg" alt="Profile" className="profile-pic" />
        <span className="username">Mohamed Farrag</span>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <button className="emoji-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          😊
        </button>
        {showEmojiPicker && (
          <Picker set="apple" onSelect={handleEmojiSelect} style={{ position: 'absolute', bottom: '60px', right: '20px' }} />
        )}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="message-input"
        />
        <input type="file" onChange={handleFileUpload} className="file-input" />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
