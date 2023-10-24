import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
// import Sect4_1 from './Sect4_1'


function Section4() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>4.0 Insurance</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
    </>
  );
  
  
}
export default Section4;
