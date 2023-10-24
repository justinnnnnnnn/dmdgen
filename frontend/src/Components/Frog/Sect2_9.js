import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_9() {
  const [canSpeakEnglish, setCanSpeakEnglish] = useState(null);
  const [otherLanguage, setOtherLanguage] = useState('');

  const renderLanguageResponse = () => {
    let response = canSpeakEnglish ? 'Yes.' : 'No.';

    if (otherLanguage) {
      response += ` Plaintiff primarily speaks ${otherLanguage}.`;
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
                checked={canSpeakEnglish === true}
                onChange={() => setCanSpeakEnglish(true)}
              /> Yes, I can speak English with ease.
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={canSpeakEnglish === false}
                onChange={() => setCanSpeakEnglish(false)}
              /> No, I cannot speak English with ease.
            </label>
            <br />
            <label>
              If not, what language and dialect do you normally use?
              <input
                type="text"
                value={otherLanguage}
                onChange={(e) => setOtherLanguage(e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.9:
            <div>
              {canSpeakEnglish !== null && renderLanguageResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_9;
