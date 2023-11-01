import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect20_1 from './Sect20_1.js'

function Section20() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 20: Whatever this is </h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect20_1/>
    </>
  );
  
  
}
export default Section20;
