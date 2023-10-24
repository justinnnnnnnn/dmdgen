import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect2_1 from './Sect2_1';
import Sect2_2 from './Sect2_2';
import Sect2_3 from './Sect2_3';
import Sect2_4 from './Sect2_4';
import Sect2_5 from './Sect2_5';
import Sect2_6 from './Sect2_6';
import Sect2_7 from './Sect2_7';
import Sect2_8 from './Sect2_8';
import Sect2_9 from './Sect2_9';
import Sect2_10 from './Sect2_10';
import Sect2_11 from './Sect2_11';
import Sect2_12 from './Sect2_12';
import Sect2_13 from './Sect2_13';


function Section2() {  
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>2.0 General Background Information—Individual</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect2_1/>
      <Sect2_2/>
      <Sect2_3/>
      <Sect2_4/>
      <Sect2_5/>
      <Sect2_6/>
      <Sect2_7/>
      <Sect2_8/>
      <Sect2_9/>
      <Sect2_10/>
      <Sect2_11/>
      <Sect2_12/>
      <Sect2_13/>
    </>
  );
  
  
}
export default Section2;
