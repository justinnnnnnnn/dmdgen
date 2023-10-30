import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_6() {
  const [medicalServices, setMedicalServices] = useState('');

  const handleChange = (e) => {
    setMedicalServices(e.target.value);
  };

  const renderResponse = () => {
    if (medicalServices.trim() === '') {
      return null;
    }
    return `${medicalServices.trim()}. Plaintiff refers propounding party to the attached medical records.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.6 Are there any other medical services necessitated by the injuries attributed to incident not previously listed?
            <br />
            <textarea
              value={medicalServices}
              onChange={handleChange}
            />
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.6:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_6;
