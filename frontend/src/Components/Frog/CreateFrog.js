// frontend/src/Components/Frog/CreateFrog.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createFrog } from '../../store/frog';

const CreateFrog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const createNewFrog = async () => {
      try {
        const minimalFrogData = {
          Locale: "Frogger Highway"
        };

        const newFrog = await dispatch(createFrog(minimalFrogData));
        if (newFrog && newFrog.id) {
          navigate(`/frogs/${newFrog.id}`); // Redirect to the edit page
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    createNewFrog();
  }, [dispatch, navigate]);

  return <div>Creating a new frog...</div>;
};

export default CreateFrog;