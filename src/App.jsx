
// import React from "react";
// import AddPost from './AddPost';
// import Store from './store'
// import './App.css';

// function App() {
//   return (
//     <div className="post">
//       <div className="Add"><AddPost /></div>
//      <div className="store"> <Store /></div>
//     </div>
//   );
// }

// export default App;


import React from "react";
import AddPost from './AddPost';
import Store from './store';
import './App.css';

function App() {
  return (
    <div className=" justify-center">
      <div className="Add mx-auto"><AddPost /></div>
      <div className="store"><Store /></div>
    </div>
  );
}

export default App;
