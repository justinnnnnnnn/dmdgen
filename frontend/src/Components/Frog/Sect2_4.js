import React, { useState, useContext } from 'react';
// import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_4() {
  // const { plaintiff } = useContext(FrogContext);
  const [hasOtherPermit, setHasOtherPermit] = useState(false);
  const [permitState, setPermitState] = useState('');
  const [permitNumber, setPermitNumber] = useState('');
  const [permitDate, setPermitDate] = useState('');
  const [permitRestrictions, setPermitRestrictions] = useState('');

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.4 At the Time of the INCIDENT, did you have any other permit or license for the operation of a motor vehicle? If so state:
            <br />
            <input 
              type="radio" 
              checked={!hasOtherPermit} 
              onChange={() => setHasOtherPermit(false)} 
            /> Plaintiff did not have any other permit or license for the operation of a motor vehicle at the time of INCIDENT.
            <br />
            <input 
              type="radio" 
              checked={hasOtherPermit} 
              onChange={() => setHasOtherPermit(true)} 
            /> Yes
            {hasOtherPermit && (
              <>
                <br />
                <label>(a) The state or other issuing entity:
                  <input 
                    type="text" 
                    value={permitState} 
                    onChange={(e) => setPermitState(e.target.value)}
                  />
                </label>
                <br />
                <label>(b) The permit or license number and type:
                  <input 
                    type="text" 
                    value={permitNumber} 
                    onChange={(e) => setPermitNumber(e.target.value)}
                  />
                </label>
                <br />
                <label>(c) The date of issuance:
                  <input 
                    type="text" 
                    value={permitDate} 
                    onChange={(e) => setPermitDate(e.target.value)}
                  />
                </label>
                <br />
                <label>(d) All restrictions:
                  <input 
                    type="text" 
                    value={permitRestrictions} 
                    onChange={(e) => setPermitRestrictions(e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.4:
            {hasOtherPermit 
              ? <>
                  <p>a) {permitState}</p>
                  <p>b) {permitNumber}</p>
                  <p>c) {permitDate}</p>
                  <p>d) {permitRestrictions}</p>
                </>
              : 'Plaintiff did not have any other permit or license for the operation of a motor vehicle at the time of the INCIDENT.'
            }
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_4;
