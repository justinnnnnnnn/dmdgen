import React, { useEffect } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect9_1({ setDamages, damages }) {
  useEffect(() => {
    if (damages === null || damages === undefined) {
      setDamages(false);
    }
  }, []);

  const handleChange = (e) => {
    setDamages(e.target.value === 'Yes');
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            9.1 Do you attribute damages?
            <div>
              <label>
                <input
                  type="radio"
                  name="damages"
                  value="Yes"
                  onChange={handleChange}
                  checked={damages === true}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="damages"
                  value="No"
                  onChange={handleChange}
                  checked={damages === false}
                /> No
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            Response to Request No. 9.1:
            <div>
              {damages !== null ? (damages ? 'Yes' : 'No') : ''}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect9_1;
