import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_6({ lossOfIncome }) {
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
            8.6 State the dates you did not work and for which you lost income as a result of the INCIDENT.
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
            Response to Request No. 8.6:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_6;
