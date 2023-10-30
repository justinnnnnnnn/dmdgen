import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect8_1 from './Sect8_1'
import Sect8_2 from './Sect8_2'
import Sect8_3 from './Sect8_3.js'
import Sect8_4 from './Sect8_4'
import Sect8_5 from './Sect8_5'
import Sect8_6 from './Sect8_6'
import Sect8_7 from './Sect8_7'
import Sect8_8 from './Sect8_8'




function Section8() {  
  const [lossOfIncome, setLossOfIncome] = useState(false);
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 8: Loss of income of earning Capacity</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect8_1 lossOfIncome={lossOfIncome} setLossOfIncome={setLossOfIncome} />
      <Sect8_2 lossOfIncome={lossOfIncome} />
      <Sect8_3 lossOfIncome={lossOfIncome} />
      <Sect8_4 lossOfIncome={lossOfIncome} />
      <Sect8_5 lossOfIncome={lossOfIncome} />
      <Sect8_6 lossOfIncome={lossOfIncome} />
      <Sect8_7 lossOfIncome={lossOfIncome} />
      <Sect8_8 lossOfIncome={lossOfIncome} />
    </>
  );
  
  
}
export default Section8;
