// Section2_1.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';


function Section2_1() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_1Data = currentFrogData.section2_1 || { useBirthName: true, names: [{ name: '', date: '' }] };
  const plaintiff = currentFrogData ? currentFrogData.plaintiff : '';
  const [localData, setLocalData] = useState(initialSection2_1Data);

  useEffect(() => {
    if (currentFrogData.section2_1) {
      setLocalData(currentFrogData.section2_1);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({ useBirthName: true, names: [{ name: '', date: '' }] });
    }
  }, [currentFrogData.section2_1]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData); // Update local state
    dispatch(updateFrogField('section2_1', updatedData)); // Dispatch to Redux
  };

  const handleNameChange = (index, field, value) => {
    let updatedNames = [...localData.names];
    updatedNames[index][field] = value;
    if (index === updatedNames.length - 1 && field === 'date' && value) {
      updatedNames = [...updatedNames, { name: '', date: '' }];
    }
    handleInputChange('names', updatedNames);
  };

  const handleUseBirthNameChange = (value) => {
    setLocalData({ ...localData, useBirthName: value });
    dispatch(updateFrogField('section2_1', { ...localData, useBirthName: value }));
  };


  
 
  const renderNamesResponse = () => {
    if (localData.useBirthName) {
      return `a-c) Plaintiff has used the name ${plaintiff} since birth.`;
    }

    const nonEmptyNames = localData.names.filter(item => item.name.trim() || item.date.trim());

    let response = `a-c) Plaintiff has used the name ${plaintiff} since ${nonEmptyNames[0]?.date || ''}. `;
    nonEmptyNames.forEach((item, index) => {
      if (index > 0) {
        response += `Plaintiff used ${item.name} from ${item.date} to ${nonEmptyNames[index - 1].date}. `;
      }
    });

    return response.trim();
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.1 State:
            <div>
              (a) your name;
              <br />
              (b) every name you have used in the past; and
              <br />
              (c) the dates you used each name.
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="useBirthName"
                  checked={localData.useBirthName === true}
                  onChange={() => handleInputChange('useBirthName', true)}
                />
                Plaintiff has used the name {plaintiff} since birth.
              </label>
              <label>
                <input
                  type="radio"
                  name="useBirthName"
                  checked={localData.useBirthName === false}
                  onChange={() => handleInputChange('useBirthName', false)}
                />
                Input names
              </label>
            </div>
            {!localData.useBirthName && localData.names.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                {index === 0 ? (
                  <span style={{ marginRight: '8px' }}>{plaintiff}</span>
                ) : (
                  <label>
                    Name {index + 1}:
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleNameChange(index, 'name', e.target.value)}
                      style={{ marginRight: '8px' }}
                    />
                  </label>
                )}
                <label>
                  Date {index + 1}:
                  <input
                    type="text"
                    value={item.date}
                    onChange={(e) => handleNameChange(index, 'date', e.target.value)}
                  />
                </label>
              </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request 2.1
            {renderNamesResponse()}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_1;
