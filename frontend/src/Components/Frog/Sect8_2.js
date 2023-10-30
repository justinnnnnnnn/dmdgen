import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect8_2({ lossOfIncome }) {
  const [jobTitle, setJobTitle] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [startDate, setStartDate] = useState('');

  const renderResponse = () => {
    if (!lossOfIncome) {
      return 'Not Applicable.';
    }

    let response = 'Plaintiff has been ';
    if (jobTitle) {
      response += `a ${jobTitle} `;
    }
    if (employerName) {
      response += `at ${employerName} `;
    }
    if (startDate) {
      response += `since ${startDate}.`;
    }
    return response;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            8.2 State the nature of your work at the time of the incident
            {lossOfIncome && (
              <div>
                <div>
                  <label>
                    Job Title:
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Name of Employment:
                    <input
                      type="text"
                      value={employerName}
                      onChange={(e) => setEmployerName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Start Date:
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 8.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect8_2;
