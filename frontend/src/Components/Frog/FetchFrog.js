// frontend/src/Components/Frog/FetchFrog.js <- this is the singular get frog page
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSingleFrog } from '../../store/frog';

const FetchFrog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const frogData = useSelector(state => state.frog.currentFrog); // Assuming the state shape

  useEffect(() => {
    dispatch(fetchSingleFrog(id));
  }, [id, dispatch]);

  return (
    <div>
      <h2>Frog Details (JSON):</h2>
      <pre>
        {frogData ? JSON.stringify(frogData, null, 2) : 'Loading frog details...'}
      </pre>
      <button onClick={() => navigate(`/frogs/edit/${id}`)}>Edit Frog</button>
    </div>
  );
};

export default FetchFrog;
