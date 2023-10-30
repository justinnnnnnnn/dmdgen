import React, {useEffect} from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_1({ setLossOfIncome, lossOfIncome }) {
  useEffect(() => {
    if (lossOfIncome === null || lossOfIncome === undefined) {
      setLossOfIncome(false);
    }
  }, []);

  const handleChange = (e) => {
    setLossOfIncome(e.target.value === 'Yes');
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.1 Do you attribute any loss of income of earning capacity to incident?
            <div>
              <label>
                <input
                  type="radio"
                  name="lossOfIncome"
                  value="Yes"
                  onChange={handleChange}
                  checked={lossOfIncome === true}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="lossOfIncome"
                  value="No"
                  onChange={handleChange}
                  checked={lossOfIncome === false}
                /> No
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.1:
            <div>
              {lossOfIncome !== null ? (lossOfIncome ? 'Yes' : 'No') : ''}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_1;
