import React from 'react';

function ChatList() {
  // Chat Data
  const chats = [
    { id: 1, user: 'Mahomud Badawy', profilePic: '' },
    { id: 2, user: 'Mohamed Farrag', profilePic: '' },
    { id: 3, user: 'Abdullah Mahmoud', profilePic: '' },
    { id: 4, user: 'Marwan Mohamed', profilePic: '' },
    { id: 5, user: 'Ismael El-Naggar', profilePic: '' },
  ];

  const renderChats = () => {
    return chats.map((chat) => (
      <li key={chat.id} className="mb-4 bg-white">

        <a href='#' className="flex items-center">
          {/* Profile Picture */}
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white text-lg">
            <img src={chat.profilePic} className="rounded-full" />
          </div>
          {/* Username */}
          <div>
            <p className="font-semibold">{chat.user}</p>
          </div>

        </a>

      </li>
    ));
  };

  return (
    <div className="w-[350px]">
      <div className="p-6 flex flex-col h-screen">
        <h2 className="text-2xl font-semibold my-10">All messages</h2>
        <ul className="overflow-y-auto">{renderChats()}</ul>
      </div>
    </div>
  );
}

export default ChatList;
