import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import ExplorePeoplePage from './pages/ExplorePeople';
import SignUp from './pages/SignUp';



// import SomeOtherComponent from './components'; // placeholder for any other components


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        {/* <Route path="/" element={<SomeOtherComponent />} /> */}
        <Route path="/explore-posts" element={<Explore />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/explore-people" element={<ExplorePeoplePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;