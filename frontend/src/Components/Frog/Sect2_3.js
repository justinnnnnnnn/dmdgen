import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_3() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_3Data = currentFrogData.section2_3 || {
    hasLicense: false,
    licenseState: '',
    licenseNumber: '',
    licenseDate: '',
    licenseRestrictions: ''
  };

  const [localData, setLocalData] = useState(initialSection2_3Data);

  useEffect(() => {
    if (currentFrogData.section2_3) {
      setLocalData(currentFrogData.section2_3);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({
        hasLicense: false,
        licenseState: '',
        licenseNumber: '',
        licenseDate: '',
        licenseRestrictions: ''
      });
    }
  }, [currentFrogData.section2_3]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_3', updatedData));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.3 At the Time of the INCIDENT, did you have a driver's license? If so state:
            <br />
            <input 
              type="radio" 
              name="hasLicense"
              checked={!localData.hasLicense} 
              onChange={() => handleInputChange('hasLicense', false)} 
            /> Plaintiff did not have a driver's license at time of INCIDENT.
            <br />
            <input 
              type="radio" 
              name="hasLicense"
              checked={localData.hasLicense} 
              onChange={() => handleInputChange('hasLicense', true)} 
            /> Yes
            {localData.hasLicense && (
              <>
                <br />
                <label>(a) The state or other issuing entity:
                  <input 
                    type="text" 
                    value={localData.licenseState} 
                    onChange={(e) => handleInputChange('licenseState', e.target.value)}
                  />
                </label>
                <br />
                <label>(b) The license number and type:
                  <input 
                    type="text" 
                    value={localData.licenseNumber} 
                    onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>(c) The date of issuance:
                  <input 
                    type="text" 
                    value={localData.licenseDate} 
                    onChange={(e) => handleInputChange('licenseDate', e.target.value)}
                  />
                </label>
                <br />
                <label>(d) All restrictions:
                  <input 
                    type="text" 
                    value={localData.licenseRestrictions} 
                    onChange={(e) => handleInputChange('licenseRestrictions', e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.3:
            {localData.hasLicense 
              ? <>
                  <p>a) {localData.licenseState}</p>
                  <p>b) {localData.licenseNumber}</p>
                  <p>c) {localData.licenseDate}</p>
                  <p>d) {localData.licenseRestrictions}</p>
                </>
              : 'Plaintiff did not have a driver’s license at the time of the INCIDENT.'
            }
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_3;
