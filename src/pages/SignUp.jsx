import React from 'react';
import RegisterComponent from '../components/registerUser';
import '../index.css';

const SignUp = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-10 lg:py-0">
     
      {/* Right Column with Registration Form */}
      <div className="lg:w-2/3 mb-10 lg:mb-0 w-full lg:w-auto">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center text-2xl font-semibold">Get Started</h1>
          <p className="text-center">Let's get started using the registeration form</p>
        </div>
        <div className="mx-auto justify-center items-center">
          <RegistrationForm />
        </div>
        <div className="mt-4 text-center">
          <p className="mt-2">
            I have an Account{' '}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </p>
        </div>
      </div>
        {/* Left Column with Image */}
        <div className="lg:w-1/3 w-full h-full">
        <img src="./src/SVGs/signup.png" alt="Background" className="w-full h-full" />
      </div>
    </div>
  </div>
  
      );
};

export default SignUp;
