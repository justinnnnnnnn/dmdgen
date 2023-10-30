import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_3() {
  const [complaints, setComplaints] = useState('');

  const handleTextChange = (e) => {
    setComplaints(e.target.value);
  };

  const renderResponse = () => {
    if (!complaints.trim()) {
      return '';
    }
    return `As a result of the incident, Plaintiff ${complaints}.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.3 Do you still have any complaints attributed to the incident? Include description, whether the complaint is subsiding, maintaining, or worsening, and frequency and duration.
            <textarea
              value={complaints}
              onChange={handleTextChange}
              rows="5"
              style={{ width: '100%' }}
            />
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.3:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_3;
