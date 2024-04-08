import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    phone: '',
  });

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.users) || {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(userData));
  

    // Check for empty fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.error(`${key} is required`);
        return;
      }
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
     // Redirect to the login page on successful registration
  if (status === "succeeded") {
    window.location.href = "/login";
    return null;
  }

    // Dispatch the registration action
    dispatch(registerUser(formData));
  };

  // Handle registration status
  switch (status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'succeeded':
      return <div>Registration successful. Redirecting...</div>; // You can redirect here using history.push('/path')
    case 'failed':
      return <div>Error: {error}</div>; // Display error message if registration fails
    default:
      return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-4 py-2"
        />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
      </div>
        </form>
      );
  }
};

export default RegistrationForm;
