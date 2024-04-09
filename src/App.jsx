
import React from "react";
import AddPost from './AddPost';
import Store from './store'
import './App.css';

function App() {
  return (
    <div className="flex justify-center">
      <div className="Add"><AddPost /></div>
     <div className="store"> <Store /></div>
    </div>
  );
}

export default App;
