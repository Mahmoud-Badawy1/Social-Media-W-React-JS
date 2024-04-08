import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";
import '../index.css';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.error(`${key} is required`);
        return;
      }
    }

    // Dispatch the login action
    dispatch(loginUser(formData));
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
      
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
