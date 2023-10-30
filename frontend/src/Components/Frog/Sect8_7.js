import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_7({ lossOfIncome }) {
  const [text, setText] = useState('');

  const renderResponse = () => {
    if (!lossOfIncome) {
      return 'Not Applicable.';
    }

    if (text) {
      return `${text}.`;
    }

    return '';
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.7 State the total income you have lost to date as a result of INCIDENT and how it was calculated.
            {lossOfIncome && (
              <div>
                <label>
                  <textarea
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </label>
              </div>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.7:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_7;
