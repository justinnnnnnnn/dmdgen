import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Frog } from './Components/Frog/Frog';
import { Doc } from './Components/Doc/Doc1';
import CreateFrog from './Components/Frog/CreateFrog'; 
import IndexFrogs from './Components/Frog/IndexFrogs'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/frogs" element={<IndexFrogs />} />
          <Route path="/frogs" element={<IndexFrogs />} />
          <Route path="/frogs/new" element={<CreateFrog />} />
          <Route path="/frogs/:id" element={<Frog />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/" element={<div>Welcome to the home page!</div>} />
        </Routes>
      </div>
      <div className='links'>
        <Link to="/frogs">Frogs Index</Link>
        <br />
        <Link to="/frogs/new">Add New Frog</Link>
        <br />
        <Link to="/doc">Go to Doc Page</Link>
      </div>
    </Router>
  );
}

export default App;
