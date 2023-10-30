import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_3({ lossOfIncome }) {
  const [lastWorkDate, setLastWorkDate] = useState('');

  const renderResponse = () => {
    if (!lossOfIncome) {
      return 'Not Applicable.';
    }

    if (lastWorkDate) {
      return `Plaintiff recalls working approximately ${lastWorkDate} before the incident.`;
    }
    
    return '';
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.3 State the last date before the incident you worked.
            {lossOfIncome && (
              <div>
                <label>
                  Last Work Date:
                  <input
                    type="text"
                    value={lastWorkDate}
                    onChange={(e) => setLastWorkDate(e.target.value)}
                  />
                </label>
              </div>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.3:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_3;
