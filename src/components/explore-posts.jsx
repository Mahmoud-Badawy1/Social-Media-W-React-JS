// I want to make a Function component to the Explore-Posts section in the Explore section so I want to render all posts from all users on the website
// and this post must have an image so I will show this image in this UI and make the profile info as a hover when I stop with the mouse on this image
// will appear the profile picture of the user and the username and when click on this image show the post in the user profile or when clicking on the profile picture or username
// that will appear as a hover it leads me to his account profile

import React from 'react';
import { Link } from 'react-router-dom';

const ExplorePosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative group">
          <Link to={`/profile/${post.user.username}`}>
            <img src={post.image} alt={post.user.username} className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <img src={post.user.profilePicture} alt={post.user.username} className="w-10 h-10 rounded-full mb-2" />
                <p className="text-white">{post.user.username}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExplorePosts;
