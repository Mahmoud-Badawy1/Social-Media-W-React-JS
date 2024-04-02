/* eslint-disable no-unused-labels */
/* eslint-disable no-unreachable */
import axios from 'axios';

// const api = 'https://friendy-social-bc47307e1168.herokuapp.com/posts';

async function getAllPosts() {
  try {
    const response = await axios.get('https://friendy-social-bc47307e1168.herokuapp.com/posts');
    return response.data;
    // withCredentials: true
  } catch (error) {
    console.error('Erro:404', error);
    return []; 
  }
}


getAllPosts().then(posts => {
  console.log(posts);
});
