// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const TestFrog = () => {
//   const [frogData, setFrogData] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate(); // Changed 'history' to 'navigate' for clarity



//   useEffect(() => {
//     fetch(`http://localhost:3000/frogs/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched data:', data);
//         setFrogData(data);
//       })
//       .catch(error => console.error('Error:', error));
//   }, [id]);

//   const handleEdit = (event) => {
//     event.preventDefault();
//     alert('Edit functionality not implemented');
//   };

//   return (
//     <div>
//       <h1>Edit Frog #{id}</h1>
//       <form onSubmit={handleEdit}>
//         {/* Render form fields based on frogData */}
//         <button type="submit">Save Changes</button>
//         <button type="button" onClick={() => navigate(-1)}>Cancel</button> {/* Changed from 'history.goBack' to 'navigate(-1)' */}
//       </form>
//     </div>
//   );
// };

// export default TestFrog;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TestFrog = () => {
  const [frogData, setFrogData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Using 'navigate' for navigation

  useEffect(() => {
    fetch(`http://localhost:3000/api/frogs/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setFrogData(data);
      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  const handleEdit = (event) => {
    event.preventDefault();
    alert('Edit functionality not implemented');
  };

  return (
    <div>
      <h1>Edit Frog #{id}</h1>
      <form onSubmit={handleEdit}>
        {/* Form fields would go here, based on frogData */}
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </form>
      {/* Displaying the fetched frog data in a formatted JSON */}
      <h2>Frog Details (JSON):</h2>
      <pre>
        {frogData ? JSON.stringify(frogData, null, 2) : 'Loading frog details...'}
      </pre>
    </div>
  );
};

export default TestFrog;
