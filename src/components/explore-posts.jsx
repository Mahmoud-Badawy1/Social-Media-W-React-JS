// I want to make a Function component to the Explore-Posts section in the Explore section so I want to render all posts from all users on the website
// and this post must have an image so I will show this image in this UI and make the profile info as a hover when I stop with the mouse on this image
// will appear the profile picture of the user and the username and when click on this image show the post in the user profile or when clicking on the profile picture or username
// that will appear as a hover it leads me to his account profile
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';
import { Link } from 'react-router-dom';
import '../index.css';

const ExplorePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getUserById = (userId) => users.find((user) => user.id === userId);

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => {
        const user = getUserById(post.created_by);
        return (
          <div key={post.id} className="relative">
            <Link to={`/profile/${user.id}`}>
              <img src={post.images[0]} alt={user.username} />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 hover:opacity-100">
                <img src={user.profile_picture} alt={user.username} className="rounded-full" />
                <p>{user.username}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExplorePosts;
