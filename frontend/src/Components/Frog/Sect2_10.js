import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_10() {
  const [canReadWriteEnglish, setCanReadWriteEnglish] = useState(null);
  const [otherLanguage, setOtherLanguage] = useState('');

  const renderLanguageResponse = () => {
    let response = canReadWriteEnglish ? 'Yes.' : 'No.';

    if (otherLanguage) {
      response += ` Plaintiff primarily reads and writes in ${otherLanguage}.`;
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
                checked={canReadWriteEnglish === true}
                onChange={() => setCanReadWriteEnglish(true)}
              /> Yes, I can read and write English with ease.
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={canReadWriteEnglish === false}
                onChange={() => setCanReadWriteEnglish(false)}
              /> No, I cannot read and write English with ease.
            </label>
            <br />
            <label>
              If not, what language and dialect do you normally use for reading and writing?
              <input
                type="text"
                value={otherLanguage}
                onChange={(e) => setOtherLanguage(e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.10:
            <div>
              {canReadWriteEnglish !== null && renderLanguageResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_10;
