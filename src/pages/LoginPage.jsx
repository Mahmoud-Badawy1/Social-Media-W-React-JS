import React from "react";
import LoginForm from "./components/LoginForm";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-0">
        {/* Left Column with Image */}
        <div className="lg:w-1/3 w-full h-full">
          <img
            src="./src/SVGs/Login.png"
            alt="Background"
            className="w-full h-full"
          />
        </div>
        {/* Right Column with Registration Form */}
        <div className="lg:w-2/3 mb-10 lg:mb-0 w-full lg:w-auto">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-2xl font-semibold">Welcome Back</h1>
            <p className="text-center">Let's login using the login form</p>
          </div>
          <div className="mx-auto justify-center items-center">
            <LoginForm />
          </div>
          <div className="mt-4 text-center">
            <p className="mt-2">
              Don't have an Account{" "}
              <a href="/signup" className="text-blue-500 underline">
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
