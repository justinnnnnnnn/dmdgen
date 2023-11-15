import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_9() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_9Data = currentFrogData.section2_9 || { canSpeakEnglish: null, otherLanguage: '' };

  const [localData, setLocalData] = useState(initialSection2_9Data);

  useEffect(() => {
    if (currentFrogData.section2_9) {
      setLocalData(currentFrogData.section2_9);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({ canSpeakEnglish: null, otherLanguage: '' });
    }
  }, [currentFrogData.section2_9]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_9', updatedData));
  };

  const renderLanguageResponse = () => {
    let response = localData.canSpeakEnglish ? 'Yes.' : 'No.';

    if (localData.otherLanguage) {
      response += ` Plaintiff primarily speaks ${localData.otherLanguage}.`;
    }

    return response;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.9 Language:
            <br />
            <label>
              <input
                type="radio"
                name="canSpeakEnglish"
                checked={localData.canSpeakEnglish === true}
                onChange={() => handleInputChange('canSpeakEnglish', true)}
              /> Yes, I can speak English with ease.
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="canSpeakEnglish"
                checked={localData.canSpeakEnglish === false}
                onChange={() => handleInputChange('canSpeakEnglish', false)}
              /> No, I cannot speak English with ease.
            </label>
            <br />
            <label>
              If not, what language and dialect do you normally use?
              <input
                type="text"
                value={localData.otherLanguage}
                onChange={(e) => handleInputChange('otherLanguage', e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.9:
            <div>
              {localData.canSpeakEnglish !== null && renderLanguageResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_9;

