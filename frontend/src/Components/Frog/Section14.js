import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect14_1 from './Sect14_1.js'

function Section14() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 14: Other Claims and Previous Claims</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect14_1/>
    </>
  );
  
  
}
export default Section14;
