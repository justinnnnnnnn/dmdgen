import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect7_1 from './Sect7_1'
import Sect7_2 from './Sect7_2'
import Sect7_3 from './Sect7_3'



function Section7() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>7.0 Property Damage</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect7_1/>
      <Sect7_2/>
      <Sect7_3/>
    </>
  );
  
  
}
export default Section7;
