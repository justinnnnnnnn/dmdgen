import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateFrog = () => {
  // Initialize formData with the structure of the frog data you want to create
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    habitat: '',
    // Add more fields as needed
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Log the formData to the console before sending
    console.log('Sending the following JSON to the server:', JSON.stringify(formData));
    
    fetch('http://localhost:3000/frogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        frog: formData // Assuming formData is an object with the frog attributes
      }),
    })
    .then(response => {
      if (!response.ok) {
        // If we get a server response but it's not OK, throw an error
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
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