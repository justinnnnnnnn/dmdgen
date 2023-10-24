import React, { useState, useContext } from 'react';
import { FrogContext } from './Frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_3() {
  const { plaintiff } = useContext(FrogContext);
  const [hasLicense, setHasLicense] = useState(false);
  const [licenseState, setLicenseState] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [licenseDate, setLicenseDate] = useState('');
  const [licenseRestrictions, setLicenseRestrictions] = useState('');

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.3 At the Time of the INCIDENT, did you have a driver's license? If so state:
            <br />
            <input 
              type="radio" 
              checked={!hasLicense} 
              onChange={() => setHasLicense(false)} 
            /> Plaintiff did not have a driver's license at time of INCIDENT.
            <br />
            <input 
              type="radio" 
              checked={hasLicense} 
              onChange={() => setHasLicense(true)} 
            /> Yes
            {hasLicense && (
              <>
                <br />
                <label>(a) The state or other issuing entity:
                  <input 
                    type="text" 
                    value={licenseState} 
                    onChange={(e) => setLicenseState(e.target.value)}
                  />
                </label>
                <br />
                <label>(b) The license number and type:
                  <input 
                    type="text" 
                    value={licenseNumber} 
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />
                </label>
                <br />
                <label>(c) The date of issuance:
                  <input 
                    type="text" 
                    value={licenseDate} 
                    onChange={(e) => setLicenseDate(e.target.value)}
                  />
                </label>
                <br />
                <label>(d) All restrictions:
                  <input 
                    type="text" 
                    value={licenseRestrictions} 
                    onChange={(e) => setLicenseRestrictions(e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.3:
            {hasLicense 
              ? <>
                  <p>a) {licenseState}</p>
                  <p>b) {licenseNumber}</p>
                  <p>c) {licenseDate}</p>
                  <p>d) {licenseRestrictions}</p>
                </>
              : 'Plaintiff did not have a driver’s license at the time of the INCIDENT.'
            }
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_3;
