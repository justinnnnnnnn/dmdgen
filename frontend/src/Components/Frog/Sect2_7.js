import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_7() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_7Data = currentFrogData.section2_7 || {
    highestLevel: '',
    degree: '',
    schools: [{ school: '', address: '', dates: '' }]
  };

  const [localData, setLocalData] = useState(initialSection2_7Data);

  useEffect(() => {
    if (currentFrogData.section2_7) {
      setLocalData(currentFrogData.section2_7);
    } else {
      setLocalData({
        highestLevel: '',
        degree: '',
        schools: [{ school: '', address: '', dates: '' }]
      });
    }
  }, [currentFrogData.section2_7]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData); // Update local state
    dispatch(updateFrogField('section2_7', updatedData)); // Dispatch to Redux
  };

  const handleSchoolChange = (index, key, value) => {
    let updatedSchools = [...localData.schools];
    updatedSchools[index][key] = value;
    if (index === updatedSchools.length - 1 && value) {
      updatedSchools = [...updatedSchools, { school: '', address: '', dates: '' }];
    }
    handleInputChange('schools', updatedSchools);
  };

  const renderSchoolsResponse = () => {
    return localData.schools.map((school, index) => {
      if (!school.school && !school.address && !school.dates) {
        return null;
      }
      return (
        <p key={index}>Plaintiff attended {school.school}, located at {school.address}, from {school.dates}.</p>
      );
    });
  };

  const renderHighestLevelResponse = () => {
    return `Plaintiff has completed ${localData.highestLevel}${localData.degree ? `, receiving a ${localData.degree}` : ''}.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.7 State:
            <br />
            <label>Highest Level of School Completed:
              <input 
                type="text" 
                value={localData.highestLevel} 
                onChange={(e) => handleInputChange('highestLevel', e.target.value)}
              />
            </label>
            <br />
            <label>Degree Received (if any):
              <input 
                type="text" 
                value={localData.degree} 
                onChange={(e) => handleInputChange('degree', e.target.value)}
              />
            </label>
            <br />
            {localData.schools.map((school, index) => (
              <div key={index}>
                <label>School Name:
                  <input 
                    type="text" 
                    value={school.school} 
                    onChange={(e) => handleSchoolChange(index, 'school', e.target.value)}
                  />
                </label>
                <br />
                <label>Address:
                  <input 
                    type="text" 
                    value={school.address} 
                    onChange={(e) => handleSchoolChange(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>Dates Attended:
                  <input 
                    type="text" 
                    value={school.dates} 
                    onChange={(e) => handleSchoolChange(index, 'dates', e.target.value)}
                  />
                </label>
                <br />
              </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.7:
            <div>
              <p>{renderHighestLevelResponse()}</p>
              {renderSchoolsResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_7;
