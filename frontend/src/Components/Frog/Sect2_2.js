import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_2() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_2Data = currentFrogData.section2_2 || { dateOfBirth: '', locationOfBirth: '' };

  const [localData, setLocalData] = useState(initialSection2_2Data);

  useEffect(() => {
    if (currentFrogData.section2_2) {
      setLocalData(currentFrogData.section2_2);
    } else {
      setLocalData({ dateOfBirth: '', locationOfBirth: '' });
    }
  }, [currentFrogData.section2_2]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData); // Update local state
    dispatch(updateFrogField('section2_2', updatedData)); // Dispatch to Redux
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.2 State the date and place of your birth.
            <br />
            <label>
              Date of Birth:
              <input 
                type="text" 
                value={localData.dateOfBirth} 
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </label>
            <br />
            <label>
              Location of Birth:
              <input 
                type="text" 
                value={localData.locationOfBirth} 
                onChange={(e) => handleInputChange('locationOfBirth', e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request 2.2:
            {localData.dateOfBirth && localData.locationOfBirth && 
              ` Plaintiff was born on ${localData.dateOfBirth} in ${localData.locationOfBirth}.`}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_2;
