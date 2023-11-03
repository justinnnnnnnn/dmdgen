import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Frog } from './Components/Frog/Frog';
import { Doc } from './Components/Doc/Doc1';
import TestFrog from './Components/TestFrog/TestFrog';
import CreateFrog from './Components/TestFrog/CreateFrog'; // Adjust the import path as necessary
import FrogsIndex from './Components/TestFrog/FrogsIndex'; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/frogs" element={<FrogsIndex />} />
          <Route path="/frogs/new" element={<CreateFrog />} />
          <Route path="/frogs/:id" element={<TestFrog />} />
          {/* <Route path="/frog" element={<Frog />} /> */}
          <Route path="/doc" element={<Doc />} />
          <Route path="/" element={<div>Welcome to the home page!</div>} />
        </Routes>
      </div>
      <div>
        <Link to="/frogs">Frogs Index</Link>
        <br />
        <Link to="/frogs/new">Add New Frog</Link>
        <br />
        <Link to="/frog">Go to Frog Page</Link>
        <br />
        <Link to="/testfrog">Go to Test Frog Page</Link>
        <br />
        <Link to="/doc">Go to Doc Page</Link>
      </div>
    </Router>
  );
}

export default App;
