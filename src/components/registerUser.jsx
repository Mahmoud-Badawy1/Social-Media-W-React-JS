import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../redux/slices/usersSlice"; // Adjust the import path as needed

const RegisterComponent = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    confirm_password: "",
    avatar_url: "", // Optional field
  });

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.users);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(userData));
  };

  // Redirect to the login page on successful registration
  if (status === "succeeded") {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Input field for username */}
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Input field for email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Input field for password */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Input field for date of birth (dob) */}
          <div className="mb-4">
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Input field for phone number */}
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Input field for confirm password */}
          <div className="mb-4">
            <input
              type="password"
              name="confirm_password"
              value={userData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            {status === "loading" && <p>Registering...</p>}
            {error && toast.error("Failed to register user: " + error)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
