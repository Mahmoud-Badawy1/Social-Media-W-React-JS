/* eslint-disable no-unused-vars */
// YourComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';

function YourComponent() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        created_by: '', // Set your created_by number
        content: '',
        images: [], // Array of images
    });
    const { status, error } = useSelector((state) => state.posts);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formData));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default YourComponent;
