import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect11_1 from './Sect11_1.js'
import Sect11_2 from './Sect11_2.js'

function Section11() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 11: Other Claims and Previous Claims</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect11_1/>
      <Sect11_2/>
    </>
  );
  
  
}
export default Section11;
