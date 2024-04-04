// I want to make a Function component to the Explore-People section in the Explore section so I want to render all users on the website Suggestions section and make it a component "Suggestions"
// and make compnent "Search" to search for users and appear the user profile picture and user username when search on it and use .includes
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/slices/usersSlice';
import UserComponent from './FriendsComponent'; // Assuming this is the correct import path
import Search from './Search'; // Assuming you have a Search component

const ExplorePeople = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const filteredUsers = searchTerm
    ? users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users;

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="suggestions">
        {filteredUsers.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePeople;
