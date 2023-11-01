import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect12_1 from './Sect12_1.js'
import Sect12_2 from './Sect12_2.js'
import Sect12_3 from './Sect12_3.js'
import Sect12_4 from './Sect12_4.js'
import Sect12_5 from './Sect12_5.js'
import Sect12_6 from './Sect12_6.js'
import Sect12_7 from './Sect12_7.js'

function Section12() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 12: Other Claims and Previous Claims</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect12_1/>
      <Sect12_2/>
      <Sect12_3/>
      <Sect12_4/>
      <Sect12_5/>
      <Sect12_6/>
      <Sect12_7/>
    </>
  );
  
  
}
export default Section12;
