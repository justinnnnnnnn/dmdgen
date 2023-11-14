// fronted/src/Components/Frog/Frog.js

import React, {useState, useEffect} from 'react';
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Section4 from './Section4'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Section11 from './Section11'
import Section12 from './Section12'
import Section14 from './Section14'
import Section17 from './Section17'
import Section20 from './Section20'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleFrog, saveFrog, setFrogData } from '../../store/frog';


const FrogContext = React.createContext();


function Frog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const frogData = useSelector((state) => state.frog.data);
  const [formData, setFormData] = useState({});
  const currentFrog = useSelector((state) => state.frog.currentFrog);
  

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleFrog(id));
    }
  }, [id, dispatch]);

  
  useEffect(() => {
    if (frogData) {
    setFormData(frogData);
    }
  }, [frogData]);

  // Update Redux store whenever formData changes
  useEffect(() => {
    dispatch(setFrogData(formData));
  }, [formData, dispatch]);

  // Call this function to handle form data changes
  const handleInputChange = (field, value) => {
    setFormData(prevFormData => ({
    ...prevFormData,
    [field]: value
    }));
  };

  const handleFrogDataChange = (newData) => {
    dispatch(setFrogData(newData));
  };
  

  const handleSaveFrog = () => {
    console.log("currentFrog we savin", currentFrog)
    const formDataToSave = currentFrog.data;
    dispatch(saveFrog(id, formDataToSave));
  };

  return (
    <div className="frog-container">
      <button onClick={handleSaveFrog}>Save Changes</button>
      <Section>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section14 />
        <Section17 />
        <Section20 />
      </Section>
    </div>   
  );
}

export { Frog, FrogContext };
