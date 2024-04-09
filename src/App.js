import React, { useState } from 'react';
import './App.css';

function AddPostForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title });
    setTitle('');
  };

  return (
    <div>
    <div className="form-container">
      <h1>Feeds</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className='tit'></label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Send</button>
        <button type="submit">Image</button>
        <button type="submit">Public</button>
      </form>
      </div>
      <div className='nav'>
        <div>
          <h1>Stories</h1>
          
        </div>
        <div>
            <h1>Suggestions</h1>

        </div>
      </div>
    
    </div>
  );
}

export default AddPostForm;
