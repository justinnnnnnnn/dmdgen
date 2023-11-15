import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_8() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_8Data = currentFrogData.section2_8 || {
    hasFelonyConviction: null,
    convictions: [{ city: '', state: '', date: '', offense: '', court: '', caseNumber: '' }]
  };

  const [localData, setLocalData] = useState(initialSection2_8Data);

  useEffect(() => {
    if (currentFrogData.section2_8) {
      setLocalData(currentFrogData.section2_8);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({
        hasFelonyConviction: null,
        convictions: [{ city: '', state: '', date: '', offense: '', court: '', caseNumber: '' }]
      });
    }
  }, [currentFrogData.section2_8]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData); // Update local state
    dispatch(updateFrogField('section2_8', updatedData)); // Dispatch to Redux
  };

  const handleConvictionChange = (index, key, value) => {
    let updatedConvictions = [...localData.convictions];
    updatedConvictions[index][key] = value;
    if (index === updatedConvictions.length - 1) {
      updatedConvictions.push({ city: '', state: '', date: '', offense: '', court: '', caseNumber: '' });
    }
    handleInputChange('convictions', updatedConvictions);
  };

  const renderConvictionsResponse = () => {
    if (localData.hasFelonyConviction === false) {
      return "No";
    } else if (localData.hasFelonyConviction) {
      return localData.convictions.map((conviction, index) => {
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
                name="hasFelonyConviction"
                checked={localData.hasFelonyConviction === false}
                onChange={() => handleInputChange('hasFelonyConviction', false)}
              /> No
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hasFelonyConviction"
                checked={localData.hasFelonyConviction === true}
                onChange={() => handleInputChange('hasFelonyConviction', true)}
              /> Yes
            </label>
            {localData.hasFelonyConviction && (
              localData.convictions.map((conviction, index) => (
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
                      type="text"
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
