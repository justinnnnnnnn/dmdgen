import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_7() {
  const [highestLevel, setHighestLevel] = useState('');
  const [degree, setDegree] = useState('');
  const [schools, setSchools] = useState([{ school: '', address: '', dates: '' }]);

  const handleSchoolChange = (index, key, value) => {
    const updatedSchools = [...schools];
    updatedSchools[index][key] = value;
    setSchools(updatedSchools);

    if (index === updatedSchools.length - 1) {
      setSchools([...updatedSchools, { school: '', address: '', dates: '' }]);
    }
  };

  const renderSchoolsResponse = () => {
    return schools.map((school, index) => {
      if (!school.school && !school.address && !school.dates) {
        return null;
      }
      return (
        <p key={index}>Plaintiff attended {school.school}, located at {school.address}, from {school.dates}.</p>
      );
    });
  };

  const renderHighestLevelResponse = () => {
    return `Plaintiff has completed ${highestLevel}${degree ? `, receiving a ${degree}` : ''}.`;
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
                value={highestLevel} 
                onChange={(e) => setHighestLevel(e.target.value)}
              />
            </label>
            <br />
            <label>Degree Received (if any):
              <input 
                type="text" 
                value={degree} 
                onChange={(e) => setDegree(e.target.value)}
              />
            </label>
            <br />
            {schools.map((school, index) => (
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
