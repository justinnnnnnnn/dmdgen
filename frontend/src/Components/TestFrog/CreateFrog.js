// frontend/src/TestFrog/CreateFrog.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
// import { createFrog } from '../store/frog'; // Import the action
import { createFrog } from '../../store/frog';


const CreateFrog = () => {
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    habitat: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the JSON structure for the frog data
    const frogData = {
      data: JSON.stringify(formData)
    };

    try {
      // Dispatch the createFrog action
      const data = await dispatch(createFrog(frogData));
      console.log(data);
      navigate('/path-where-you-want-to-redirect');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <h1>Create Frog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
        </label>
        <label>
          Habitat:
          <input type="text" name="habitat" value={formData.habitat} onChange={handleInputChange} />
        </label>
        {/* Add more input fields as needed */}
        <button type="submit">Add Frog</button>
      </form>
    </div>
  );
};

export default CreateFrog;
