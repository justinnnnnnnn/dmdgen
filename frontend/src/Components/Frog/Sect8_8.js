import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_8({ lossOfIncome }) {
  const [futureIncomeLossDetails, setFutureIncomeLossDetails] = useState('');

  const renderResponse = () => {
    if (!lossOfIncome) {
      return 'Not Applicable.';
    }
    return futureIncomeLossDetails || '';
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.8 Will you lose income in the future as a result of the INCIDENT? If so state
            <ol type="a">
              <li>the facts of this contention</li>
              <li>an estimate of the amount</li>
              <li>an estimate for how long you will be unable to work</li>
              <li>how the claim for future income is calculated</li>
            </ol>
            {lossOfIncome && (
              <textarea
                value={futureIncomeLossDetails}
                onChange={(e) => setFutureIncomeLossDetails(e.target.value)}
                rows="5"
                cols="50"
              />
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.8:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_8;
