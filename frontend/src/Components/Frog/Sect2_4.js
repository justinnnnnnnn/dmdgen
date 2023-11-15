// Sect2_4.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_4() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_4Data = currentFrogData.section2_4 || {
    hasOtherPermit: false,
    permitState: '',
    permitNumber: '',
    permitDate: '',
    permitRestrictions: ''
  };

  const [localData, setLocalData] = useState(initialSection2_4Data);

  useEffect(() => {
    if (currentFrogData.section2_4) {
      setLocalData(currentFrogData.section2_4);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({
        hasOtherPermit: false,
        permitState: '',
        permitNumber: '',
        permitDate: '',
        permitRestrictions: ''
      });
    }
  }, [currentFrogData.section2_4]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_4', updatedData));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.4 At the Time of the INCIDENT, did you have any other permit or license for the operation of a motor vehicle? If so state:
            <br />
            <input 
              type="radio" 
              name="hasOtherPermit"
              checked={!localData.hasOtherPermit} 
              onChange={() => handleInputChange('hasOtherPermit', false)} 
            /> Plaintiff did not have any other permit or license for the operation of a motor vehicle at the time of INCIDENT.
            <br />
            <input 
              type="radio" 
              name="hasOtherPermit"
              checked={localData.hasOtherPermit} 
              onChange={() => handleInputChange('hasOtherPermit', true)} 
            /> Yes
            {localData.hasOtherPermit && (
              <>
                <br />
                <label>(a) The state or other issuing entity:
                  <input 
                    type="text" 
                    value={localData.permitState} 
                    onChange={(e) => handleInputChange('permitState', e.target.value)}
                  />
                </label>
                <br />
                <label>(b) The permit or license number and type:
                  <input 
                    type="text" 
                    value={localData.permitNumber} 
                    onChange={(e) => handleInputChange('permitNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>(c) The date of issuance:
                  <input 
                    type="text" 
                    value={localData.permitDate} 
                    onChange={(e) => handleInputChange('permitDate', e.target.value)}
                  />
                </label>
                <br />
                <label>(d) All restrictions:
                  <input 
                    type="text" 
                    value={localData.permitRestrictions} 
                    onChange={(e) => handleInputChange('permitRestrictions', e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.4:
            {localData.hasOtherPermit 
              ? <>
                  <p>a) {localData.permitState}</p>
                  <p>b) {localData.permitNumber}</p>
                  <p>c) {localData.permitDate}</p>
                  <p>d) {localData.permitRestrictions}</p>
                </>
              : 'Plaintiff did not have any other permit or license for the operation of a motor vehicle at the time of the INCIDENT.'
            }
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_4;
