import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_4({ lossOfIncome }) {
  const [monthlyIncome, setMonthlyIncome] = useState('');

  const renderResponse = () => {
    if (!lossOfIncome) {
      return 'Not Applicable.';
    }

    if (monthlyIncome) {
      return `Plaintiff recalls earning approximately ${monthlyIncome} a month around the time of the INCIDENT. This number is based on Plaintiff's working hours at Plaintiff's hourly wage.`;
    }

    return '';
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.4 State your monthly income and how it was calculated.
            {lossOfIncome && (
              <div>
                <label>
                  Monthly Income:
                  <input
                    type="text"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                  />
                </label>
              </div>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.4:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_4;
