import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_1() {
  const [answer, setAnswer] = useState(null);

  const handleRadioChange = (e) => {
    setAnswer(e.target.value);
  };

  const renderResponse = () => {
    if (answer === null) {
      return '';
    }
    return `Plaintiff ${answer === 'yes' ? 'does' : 'does not'} attribute injuries to the incident.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.1 Do you attribute injuries to the incident?
            <div>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={answer === 'yes'}
                  onChange={handleRadioChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={answer === 'no'}
                  onChange={handleRadioChange}
                />
                No
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.1:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_1;

