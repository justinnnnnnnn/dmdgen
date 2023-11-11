// frotend/src/Components/Frog/Section1.js

import React, { useState, useEffect } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import './grid.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateFrogField } from '../../store/frog';

function Section1() {
  const dispatch = useDispatch();
  const currentFrog = useSelector((state) => state.frog.currentFrog) || {};

  // Initialize local state
  const [localPlaintiff, setLocalPlaintiff] = useState('');
  const [localDefendants, setLocalDefendants] = useState(['']);

  // Update local state when currentFrog changes
  useEffect(() => {
    if (currentFrog && currentFrog.data) {
      setLocalPlaintiff(currentFrog.data.plaintiff || '');
      setLocalDefendants(currentFrog.data.defendants || ['']);
    }
  }, [currentFrog]);

  const handleInputChange = (fieldName, value) => {
    if (fieldName === 'plaintiff') {
      setLocalPlaintiff(value);
    }
    console.log(fieldName, value)
    dispatch(updateFrogField(fieldName, value));
  };

  // const handleDefendantChange = (index, value) => {
  //   const newDefendants = [...localDefendants]; // Use localDefendants
  //   newDefendants[index] = value;
  //   handleInputChange('defendants', newDefendants);
  //   if (index === newDefendants.length - 1 && value) {
  //     newDefendants.push('');
  //     handleInputChange('defendants', newDefendants);
  //   }
  // };

  const handleDefendantChange = (index, value) => {
    let newDefendants = [...localDefendants];
  
    // Update the value at the current index
    newDefendants[index] = value;
  
    // Check if the current field is the last one
    const isLastField = index === newDefendants.length - 1;
  
    // Add a new empty field if the current field is the last one and has at least one character
    if (isLastField && value.trim() !== '') {
      newDefendants.push('');
    }
  
    // Remove empty fields except the last one
    if (newDefendants.length > 1) {
      newDefendants = newDefendants.filter((def, idx) => def.trim() !== '' || idx === newDefendants.length - 1);
    }
  
    // Update local state and Redux store
    setLocalDefendants(newDefendants);
    dispatch(updateFrogField('defendants', newDefendants));
  };
  
  
  
  
  
  

  const formattedDefendants = () => {
    const filledDefendants = localDefendants.filter(def => def.trim() !== ''); // Use localDefendants
    switch (filledDefendants.length) {
      case 0: return '';
      case 1: return filledDefendants[0];
      case 2: return filledDefendants.join(' and ');
      default: return filledDefendants.slice(0, -1).join(', ') + ', and ' + filledDefendants.slice(-1);
    }
  };

  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 1, Plaintiff and Defendant(s)</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
  
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <label>
                Plaintiff:
                <input 
                  type="text" 
                  value={localPlaintiff}
                  onChange={(e) => handleInputChange('plaintiff', e.target.value)}
                />
              </label>
            </ChildCol>
            <ChildCol>
              {localPlaintiff} {/* Display localPlaintiff here */}
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              {"Defendants:"}
            </ChildCol>
            <ChildCol>
              {formattedDefendants()} {/* This function should use localDefendants */}
            </ChildCol>
          </ChildRow>
  
          {localDefendants.map((defendant, index) => (
            <ChildRow key={index}>
              <ChildCol>
                <label>
                  Defendant {index + 1}:
                  <input 
                    type="text"
                    value={defendant}
                    onChange={(e) => handleDefendantChange(index, e.target.value)}
                  />
                </label>
              </ChildCol>
              <ChildCol>
                {defendant} {/* Display each defendant from localDefendants */}
              </ChildCol>
            </ChildRow>
          ))}
        </MainCol>
      </MainRow>
    </>
  );
  
}


export default Section1;
