import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect17_1 from './Sect17_1.js'

function Section17() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 17: Respones to Request for Admissions</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect17_1/>
    </>
  );
  
  
}
export default Section17;
