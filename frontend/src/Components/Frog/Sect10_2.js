import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section10_2() {
  const [disabilities, setDisabilities] = useState('');
  const [hasDisabilities, setHasDisabilities] = useState(false);

  const handleDisabilitiesChange = (e) => {
    setDisabilities(e.target.value);
    if (e.target.value.trim() !== '') {
      setHasDisabilities(true);
    } else {
      setHasDisabilities(false);
    }
  };

  const renderResponse = () => {
    if (!hasDisabilities) {
      return "Plaintiff was not disabled immediately before the incident.";
    }

    return disabilities;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            10.2 List all physical, mental, emotional disabilities you had immediately before the INCIDENT. (Omit mental or emotional ones unless INCIDENT caused mental/emotional injuries)
            <div>
              <label>
                Disabilities:
                <br></br>
                <textarea
                  value={disabilities}
                  onChange={handleDisabilitiesChange}
                />
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            Response to Request No. 10.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section10_2;
