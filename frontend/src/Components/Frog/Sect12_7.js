import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_7() {
  const [response, setResponse] = useState("Police, Plaintiff, and Plaintiff's attorneys have inspected the scene of the INCIDENT. Plaintiff can be contact through Plaintiff's attorneys. Plaintiff is unaware of any other inspections. Results of police inspection can be gotten from [X PD] and their report");

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <h3>12.7 Have you or anyone acting on your behalf inspected the scene of the incident?</h3>
            <div>
              <label>
                Response:
                <textarea value={response} onChange={handleResponseChange} />
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            <h4>Response:</h4>
            <p>{response}</p>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section12_7;
