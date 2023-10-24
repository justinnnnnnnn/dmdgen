// Section2_1.js
import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';


function Section2_1() {
  const { plaintiff } = useContext(FrogContext);
  const [useBirthName, setUseBirthName] = useState(true);
  const [names, setNames] = useState([{ name: '', date: '' }]);

  const handleNameChange = (index, field, value) => {
    const updatedNames = [...names];
    updatedNames[index][field] = value;
    setNames(updatedNames);

    if (index === updatedNames.length - 1 && field === 'date' && value) {
      setNames([...updatedNames, { name: '', date: '' }]);
    }
  };

  const renderNamesResponse = () => {
    if (useBirthName) {
      return `a-c) Plaintiff has used the name ${plaintiff} since birth.`;
    }

    const nonEmptyNames = names.filter(item => item.name.trim() || item.date.trim());

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
                  checked={useBirthName}
                  onChange={() => setUseBirthName(true)}
                />
                Plaintiff has used the name {plaintiff} since birth.
              </label>
              <label>
                <input
                  type="radio"
                  checked={!useBirthName}
                  onChange={() => setUseBirthName(false)}
                />
                Input names
              </label>
            </div>
            {!useBirthName && names.map((item, index) => (
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
