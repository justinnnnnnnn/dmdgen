import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect10_1 from './Sect10_1.js'
import Sect10_2 from './Sect10_2.js'
import Sect10_3 from './Sect10_3.js'
// import Sect10_4 from './Sect10_4.js'





function Section10() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 10: Medical History</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect10_1/>
      <Sect10_2/>
      <Sect10_3/>
    </>
  );
  
  
}
export default Section10;
