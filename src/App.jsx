import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import ExplorePeoplePage from './pages/ExplorePeople';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import './index.css';
import Navegation from './components/Navegation';
import ExplorePeoplePage from './pages/ExplorePeople';
import Messages from './pages/Messages';



function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Router>
      <Routes>
        {/* <Route path="/" element={<SomeOtherComponent />} /> */}
        <Route path="/explore-posts" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/other" element={<Navegation />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/explore" element={<ExplorePeoplePage />} />
        {/* Add more routes as needed */}
      </Routes>
      </Router>
    </>
  );
}

export default App;