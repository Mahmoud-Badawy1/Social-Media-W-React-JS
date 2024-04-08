// I want to make the chat component in the bottom have a text field with an emojis button to add emojis and a picture icon to add any documents
// as files or photos and has a send button to appear the message content in the middle div so in the middle we want a div container that appears all messages by this user and the other that he is in the chat with 
//So we need in the top profile picture of the other user and his username and I can click on it to go to his profile page 
import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "../index.css"; // Make sure your styles are correctly set in this CSS file.

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef(null); // Add this line

  const handleSend = () => {
    if (message.trim() || imageURL) {
      const newMessage = { text: message, image: imageURL, sender: "user" }; // Assume 'user' for this example
      setMessages([...messages, newMessage]);
      setMessage("");
      setImageURL("");
    }
  };

  const handleEmojiSelect = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result.toString());
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click(); // Add this line
  };

  return (
    <div className="relative h-full bg-gray-100 w-full">
      <div className="p-4 flex items-center cursor-pointer">
        <img
          src="../../src/SVGs/Email Send.svg"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover mr-2"
        />
        <span className="font-medium">Other User</span>
      </div>
      <div
        className="overflow-auto p-2"
        style={{ height: "calc(100vh - 160px)" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`w-1/2 p-2 rounded-lg mb-2 ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-green-500 text-white mr-auto"
            }`}
          >
            {msg.text}
            {msg.image && (
              <img
                src={msg.image}
                alt="Uploaded"
                className="max-w-full my-2 mx-auto rounded"
              />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex items-center justify-between p-2 bg-white border-2 shadow-md rounded-xl">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow p-2 rounded border-gray-300 mr-2"
        />
        <button
          className="emoji-button mr-2"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiClick={handleEmojiSelect}
            pickerStyle={{
              position: "absolute",
              bottom: "50px",
              right: "20px",
              zIndex: 10,
            }}
          />
        )}
        {/* Styled button that acts as file input */}
        <button
          onClick={triggerFileInput}
          className="p-2 bg-blue-500 rounded text-white mr-2"
        >
          <img
            src="./src/SVGs/Pictures Folder.svg"
            alt="Upload"
            className="h-6 w-6"
          />
        </button>
        {/* Actual file input, hidden */}
        <input
          type="file"
          ref={fileInputRef} // Add this line
          onChange={handleFileUpload}
          className="hidden" // Tailwind CSS class to hide element
        />{" "}
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 rounded text-white rounded-xl"
        >
          <img
            src="../../src/SVGs/Email Send.svg"
            alt="Send"
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
