// import React from 'react';
// import './App.css';
// import {Frog} from './Components/Frog/Frog';

// function App() {
//   return (
//     <div>
//       <Frog />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Frog } from './Components/Frog/Frog';
import { Doc } from './Components/Doc/Doc1';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/frog" element={<Frog />} />
          <Route path="/doc" element={<Doc />} />
          {/* <Route path="/another-route" element=Add another component here /> */}
          {/* Add more routes as needed */}
          <Route path="/" element={
            /* This is the default route. Add a component or some content here */
            <div>Welcome to the home page!</div>
          } />
        </Routes>
      </div>
      <div>
      <Link to="/frog">Go to Frog Page</Link>
      <Link to="/doc">Go to doc Page</Link>
      </div>
    </Router>
  );
}

export default App;
