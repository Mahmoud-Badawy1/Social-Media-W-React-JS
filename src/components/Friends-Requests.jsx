import React from 'react';

function ChatList() {
  // You can adjust this Variable to add more users
  // You can also Change the props here
  // Not gonna lie i have not tested the profile picture prop (as mahmoud told me) and i am not sure if it really accepts a normal image and idk what specifed size should it take of an image :)
  const [chats, setChats] = React.useState([
    { user: 'Mahomud Badawy', profilePic: '', id: 1 },
    { user: 'Mohamed Farrag', profilePic: '', id: 2 },
    { user: 'Abdullah Mahmoud', profilePic: '', id: 3 },
    { user: 'Marwan Mohamed', profilePic: '', id: 4 },
    { user: 'Ismael El-Naggar', profilePic: '', id: 5 },
  ]);

  // This Function is used to remove a user (After pressing Decline or Confirm buttons)
  const removeChatUser = (id) => {
    setChats(chats.filter(chat => chat.id !== id));
  };

  // Structure of the User Card
  const renderChats = () => {
    return chats.map(chat => (

      <li key={chat.id} className="mb-4 bg-white">

        {/* Just made every card a link and you know why */}
        <a href="#" className="flex items-center">

          {/* Here is structure of the Profile Picture image */}
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white text-lg">
            <img src={chat.profilePic} className='rounded-full' />
          </div>

          {/* Here is the structure of the Name of the user */}
          <div>
            <p className="font-semibold">{chat.user}</p>
          </div>

          {/* buttons */}
          <div className="ml-auto flex space-x-4">

            {/* Decline */}
            <button className="px-6 py-2 border border-black text-black rounded-full transition-colors hover:bg-black hover:text-white" onClick={() => removeChatUser(chat.id)}>Decline</button>

            {/* Confirm */}
            <button className="px-6 py-2 bg-blue-400 text-white rounded-full transition-colors hover:bg-blue-700 hover:text-white" onClick={() => removeChatUser(chat.id)}>Confirm</button>
          
          </div>

        </a>

      </li>
    ));
  };

  // This message gets render if there are no Requests :)
  const renderNoRequestsMessage = () => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-xl text-gray-500">There are no Requests :( </p>
      </div>
    );
  };

  // This is the main return
  return (
    //adjust the size of the parent here according to the page you want to add this div in
    <div className='w-[600px]'>

      <div className="p-6 flex flex-col h-screen ">
        <h2 className="text-2xl font-semibold my-10">Requests</h2> {/* Change this text according to the page */}
        {chats.length === 0 ? renderNoRequestsMessage() : <ul className="overflow-y-auto">{renderChats()}</ul>}
      </div>

    </div>
  );
};

export default ChatList;