import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FrogsIndex = () => {
  const [frogs, setFrogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/frogs')
      .then(response => response.json())
      .then(data => setFrogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const deleteFrog = (id) => {
    fetch(`http://localhost:3000/frogs/${id}`, {
      method: 'DELETE',
    })
    .then(() => setFrogs(frogs.filter(frog => frog.id !== id)))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Frogs Index</h1>
      {frogs.map(frog => (
        <div key={frog.id}>
          <Link to={`/frogs/${frog.id}`}>Frog #{frog.id}</Link>
          <button onClick={() => deleteFrog(frog.id)}>Delete</button>
        </div>
      ))}
      <Link to="/frogs/new">Add New Frog</Link>
    </div>
  );
};

export default FrogsIndex;
