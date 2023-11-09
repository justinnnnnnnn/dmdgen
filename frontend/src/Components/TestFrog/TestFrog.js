// frontend/src/Components/TestFrog/TestFrog.js <- this is the singular get frog page
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSingleFrog } from '../../store/frog';

const TestFrog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const frogData = useSelector(state => state.frog.currentFrog); // Assuming the state shape

  useEffect(() => {
    dispatch(fetchSingleFrog(id));
  }, [id, dispatch]);

  return (
    <div>
      {/* Displaying the fetched frog data in a formatted JSON */}
      <h2>Frog Details (JSON):</h2>
      <pre>
        {frogData ? JSON.stringify(frogData, null, 2) : 'Loading frog details...'}
      </pre>
    </div>
  );
};

export default TestFrog;
