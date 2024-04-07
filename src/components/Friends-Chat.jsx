import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/slices/usersSlice.js';

function ChatList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllUsers());
    }
  }, [dispatch, status]);

  const renderChats = () => {
    return users.map((user) => (
      <li key={user.id} className="mb-4 bg-white">
        <a href='#' className="flex items-center">
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-white text-lg">
            <img src={user.profilePic} alt="Profile" className="rounded-full" />
          </div>
          <div>
            <p className="font-semibold">{user.username}</p> {/* Assuming 'username' property */}
          </div>
        </a>
      </li>
    ));
  };

  return (
    <div className="w-[350px]">
      <div className="p-6 flex flex-col h-screen">
        <h2 className="text-2xl font-semibold my-10">All messages</h2>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        <ul className="overflow-y-auto">{renderChats()}</ul>
      </div>
    </div>
  );
}

export default ChatList;
