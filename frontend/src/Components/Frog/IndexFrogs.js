// frontend/src/Componenets/Frog/IndexFrogs.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFrogs, destroyFrog } from '../../store/frog';

const IndexFrogs = () => {
  const dispatch = useDispatch();
  const frogs = useSelector(state => state.frog.data); // Assuming the state shape

  useEffect(() => {
    dispatch(fetchFrogs());
  }, [dispatch]);

  const handleDeleteFrog = (id) => {
    dispatch(destroyFrog(id));
  };

  return (
    <div>
      <h1>Frogs Index</h1>
      {frogs.map(frog => (
        <div key={frog.id}>
          <Link to={`/frogs/${frog.id}`}>Frog #{frog.id}</Link>
          {/* fix route in app.js so that frog is from the frog not testfrog*/}
          <button onClick={() => handleDeleteFrog(frog.id)}>Delete</button>
        </div>
      ))}
      <Link to="/frogs/new">Add New Frog</Link>
    </div>
  );
};

export default IndexFrogs;
