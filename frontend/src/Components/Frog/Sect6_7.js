import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_7() {
  const [advisedTreatment, setAdvisedTreatment] = useState('');

  const handleChange = (e) => {
    setAdvisedTreatment(e.target.value);
  };

  const renderResponse = () => {
    if (advisedTreatment.trim() === '') {
      return null;
    }
    return `${advisedTreatment.trim()}. Plaintiff refers propounding party to the attached medical records.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.7 Has any Healthcare Provider advised further treatment for related injuries?
            <br />
            <textarea
              value={advisedTreatment}
              onChange={handleChange}
            />
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.7:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_7;
