import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_2() {
  const [injuries, setInjuries] = useState('');

  const handleTextChange = (e) => {
    setInjuries(e.target.value);
  };

  const renderResponse = () => {
    if (!injuries.trim()) {
      return '';
    }
    return `As a result of the INCIDENT, Plaintiff sustained injuries including but not limited to ${injuries}.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.2 Identify each injury attributed to the incident and area of body affected:
            <textarea
              value={injuries}
              onChange={handleTextChange}
              rows="5"
              style={{ width: '100%' }}
            />
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_2;
