// I want to make a Function component to the Explore-People section in the Explore section so I want to render all users on the website Suggestions section and make it a component "Suggestions"
// and make compnent "Search" to search for users and appear the user profile picture and user username when search on it and use .includes

import React, { useState, useEffect } from 'react';
import Suggestions from './suggestions';
import Search from './Search';

// Dummy users data - you will replace this with actual data fetched from your backend or API.
const usersData = [
  { id: 1, name: 'Mahmoud Badawy', username: 'mahmoud.badawy', color: '#D8BFD8', profilePicture: 'path/to/image' },
  { id: 2, name: 'Mohamed Farrag', username: 'mohamed.farrag', color: '#FFD700', profilePicture: 'path/to/image' },
  // ... other users
];

const ExplorePeople = () => {
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    // TODO: Fetch the list of users from the backend and set it in state
    // This is just a placeholder for the actual fetch call
    // fetch('/api/users')
    //   .then(response => response.json())
    //   .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Search users={users} />
      <Suggestions users={users} />
    </div>
  );
};

export default ExplorePeople;
