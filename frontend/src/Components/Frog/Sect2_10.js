import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_10() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_10Data = currentFrogData.section2_10 || { canReadWriteEnglish: null, otherLanguage: '' };

  const [localData, setLocalData] = useState(initialSection2_10Data);

  useEffect(() => {
    if (currentFrogData.section2_10) {
      setLocalData(currentFrogData.section2_10);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({ canReadWriteEnglish: null, otherLanguage: '' });
    }
  }, [currentFrogData.section2_10]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_10', updatedData));
  };

  const renderLanguageResponse = () => {
    let response = localData.canReadWriteEnglish ? 'Yes.' : 'No.';

    if (localData.otherLanguage) {
      response += ` Plaintiff primarily reads and writes in ${localData.otherLanguage}.`;
    }

    return response;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.10 Reading and Writing:
            <br />
            <label>
              <input
                type="radio"
                name="canReadWriteEnglish"
                checked={localData.canReadWriteEnglish === true}
                onChange={() => handleInputChange('canReadWriteEnglish', true)}
              /> Yes, I can read and write English with ease.
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="canReadWriteEnglish"
                checked={localData.canReadWriteEnglish === false}
                onChange={() => handleInputChange('canReadWriteEnglish', false)}
              /> No, I cannot read and write English with ease.
            </label>
            <br />
            <label>
              If not, what language and dialect do you normally use for reading and writing?
              <input
                type="text"
                value={localData.otherLanguage}
                onChange={(e) => handleInputChange('otherLanguage', e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.10:
            <div>
              {localData.canReadWriteEnglish !== null && renderLanguageResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_10;
