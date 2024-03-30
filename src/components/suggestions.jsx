import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = ({ users }) => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Suggested for you</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full mr-3" style={{ backgroundColor: user.color }}></span>
              <Link to={`/users/${user.username}`} className="text-gray-700 hover:underline">{user.name}</Link>
            </div>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-semibold">Add Friend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
