import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_8() {
  const [hasFelonyConviction, setHasFelonyConviction] = useState(null);
  const [convictions, setConvictions] = useState([
    { city: '', state: '', date: '', offense: '', court: '', caseNumber: '' },
  ]);

  const handleConvictionChange = (index, key, value) => {
    const updatedConvictions = [...convictions];
    updatedConvictions[index][key] = value;
    setConvictions(updatedConvictions);

    if (index === updatedConvictions.length - 1) {
      setConvictions([
        ...updatedConvictions,
        { city: '', state: '', date: '', offense: '', court: '', caseNumber: '' },
      ]);
    }
  };

  const renderConvictionsResponse = () => {
    if (hasFelonyConviction === false) {
      return "No";
    } else if (hasFelonyConviction) {
      return convictions.map((conviction, index) => {
        if (conviction.city && conviction.state && conviction.date && conviction.offense && conviction.court && conviction.caseNumber) {
          return `Plaintiff was convicted in ${conviction.city}, ${conviction.state}, on ${conviction.date} for ${conviction.offense}, at ${conviction.court}, case number ${conviction.caseNumber}. `;
        }
        return null;
      }).filter(Boolean).join(' '); // Filter out any null/undefined values and join the valid strings
    }
    return '';
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.8 Has Plaintiff ever been convicted of a felony? If so:
            <br />
            <label>
              <input
                type="radio"
                checked={hasFelonyConviction === false}
                onChange={() => setHasFelonyConviction(false)}
              /> No
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={hasFelonyConviction === true}
                onChange={() => setHasFelonyConviction(true)}
              /> Yes
            </label>
            {hasFelonyConviction && (
              convictions.map((conviction, index) => (
                <div key={index}>
                  <label>a) City and State: 
                    <input
                      type="text"
                      placeholder="City"
                      value={conviction.city}
                      onChange={(e) => handleConvictionChange(index, 'city', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={conviction.state}
                      onChange={(e) => handleConvictionChange(index, 'state', e.target.value)}
                    />
                  </label>
                  <br />
                  <label>b) Date of Conviction: 
                    <input
                      type="date"
                      value={conviction.date}
                      onChange={(e) => handleConvictionChange(index, 'date', e.target.value)}
                    />
                  </label>
                  <br />
                  <label>c) Offense: 
                    <input
                      type="text"
                      value={conviction.offense}
                      onChange={(e) => handleConvictionChange(index, 'offense', e.target.value)}
                    />
                  </label>
                  <br />
                  <label>d) Court and Case Number: 
                    <input
                      type="text"
                      placeholder="Court"
                      value={conviction.court}
                      onChange={(e) => handleConvictionChange(index, 'court', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Case Number"
                      value={conviction.caseNumber}
                      onChange={(e) => handleConvictionChange(index, 'caseNumber', e.target.value)}
                    />
                  </label>
                  <br />
                </div>
              ))
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.8:
            <div>
              {renderConvictionsResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_8;
