import React from 'react';
import UsersComponent from '../components/FriendsComponent';
import ChatComponent from '../components/chat';
import Navigation from '../components/Navegation';
import '../index.css';

const Messages = () => {
  return (
    <div className="container flex" style={{ marginTop: 0, marginRight: 0, marginLeft: 0, width: '100%' }}>
      <div className="w-1/2 flex" style={{ marginTop: 0, marginRight: 0, marginLeft: 0 }} >
      {/* Left column */}
      <div className="w-1/2" style={{ marginTop: 0, marginRight: 10, marginLeft: 0 }}>
        <div className="w-full">
          <Navigation />
        </div>
      </div>

      {/* Middle column */}
      <div className="w-1/2" style={{ marginTop: 10, marginRight: 20, marginLeft: 0 }}>
        <UsersComponent />
      </div>
      </div>
      {/* Right column */}
      <div className="w-1/2" style={{ marginTop: 0, marginRight: 0, marginLeft: 0 }}>
        <ChatComponent />
      </div>
    </div>
  );
};

export default Messages;
