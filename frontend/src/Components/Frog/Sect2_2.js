import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_2() {
  const { plaintiff } = useContext(FrogContext);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [locationOfBirth,setLocationOfBirth] = useState('');

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.2 State the date and place of your birth.
            <br />
            <label>
              Date of Birth:
              <input 
                type="text" 
                value={dateOfBirth} 
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </label>
            <br />
            <label>
              Location of Birth:
              <input 
                type="text" 
                value={locationOfBirth} 
                onChange={(e) => setLocationOfBirth(e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            Response to Request 2.2:
            {dateOfBirth && locationOfBirth && 
              ` Plaintiff was born on ${dateOfBirth} in ${locationOfBirth}.`}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_2;
