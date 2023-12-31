import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect4_1 from './Sect4_1'
import Sect4_2 from './Sect4_2'


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
      <Sect4_1/>
      <Sect4_2/>
    </>
  );
  
  
}
export default Section4;
