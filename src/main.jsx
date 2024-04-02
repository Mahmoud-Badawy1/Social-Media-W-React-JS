/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navegation from './Navegation.jsx'
import Postpic from './Postpic.jsx'
import Post from './Post.jsx'
import Edit from './Edit.jsx'
import getAllPosts from './getAllPosts.jsx'
import addNewPost from './addNewPost.jsx'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <addNewPost />
  </React.StrictMode>,
)
