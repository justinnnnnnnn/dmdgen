import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect6_1 from './Sect6_1'
import Sect6_2 from './Sect6_2'
import Sect6_3 from './Sect6_3'
import Sect6_4 from './Sect6_4'
import Sect6_5 from './Sect6_5'
import Sect6_6 from './Sect6_6'
import Sect6_7 from './Sect6_7'


function Section6() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>6.0 Physical, Mental, or Emotional Damages</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect6_1/>
      <Sect6_2/>
      <Sect6_3/>
      <Sect6_4/>
      <Sect6_5/>
      <Sect6_6/>
      <Sect6_7/>
    </>
  );
  
  
}
export default Section6;
