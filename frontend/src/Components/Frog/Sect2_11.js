import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_11() {
  const [isAgentOrEmployee, setIsAgentOrEmployee] = useState(null);
  const [employer, setEmployer] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activity, setActivity] = useState('');

  const renderResponse = () => {
    let response = isAgentOrEmployee ? 'Yes.' : 'No.';

    if (isAgentOrEmployee) {
      response += ` Plaintiff was working for ${employer} at ${address}, ${phoneNumber}, ${activity}`;
    }

    return response;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.11 At the time of the INCIDENT were you acting as an agent or employee for any PERSON? If so, state:
            <br />
            <label>
              <input
                type="radio"
                checked={isAgentOrEmployee === false}
                onChange={() => setIsAgentOrEmployee(false)}
              /> No
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={isAgentOrEmployee === true}
                onChange={() => setIsAgentOrEmployee(true)}
              /> Yes
            </label>
            {isAgentOrEmployee && (
              <>
                <br />
                <label>
                  Employer:
                  <input
                    type="text"
                    value={employer}
                    onChange={(e) => setEmployer(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Activity:
                  <input
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.11:
            <div>
              {isAgentOrEmployee !== null && renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_11;
