import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import Sect9_1 from './Sect9_1.js'
import Sect9_2 from './Sect9_2'




function Section9() {  
  const [damages, setDamages] = useState(false);
  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <h3>Section 9: Other Damages</h3>
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      <Sect9_1 damages={damages} setDamages={setDamages}/>
      <Sect9_2 damages={damages} />
    </>
  );
  
  
}
export default Section9;
