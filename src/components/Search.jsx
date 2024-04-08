import React, { useState } from 'react';
import '../index.css';

const Search = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      setSearchResults(users.filter(user => user.username.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search here..."
        className="border border-gray-300 p-2 rounded-lg w-full"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="mt-4">
        {searchResults.map(user => (
          <li key={user.id} className="flex items-center py-2">
            <img src={user.profilePicture} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
