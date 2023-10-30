import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section10_1() {
  const [previousInjuries, setPreviousInjuries] = useState([]);
  const [showInputs, setShowInputs] = useState(false);

  const addInjuryFields = () => {
    setPreviousInjuries([...previousInjuries, { injuryDescription: '', date: '', treatedBy: '' }]);
    setShowInputs(true);
  };

  const handleChange = (e, field, index) => {
    const injuries = [...previousInjuries];
    injuries[index][field] = e.target.value;
    setPreviousInjuries(injuries);
  };

  const renderResponse = () => {
    if (previousInjuries.length === 0) {
      return 'No.';
    }

    return previousInjuries.map((injury, index) => (
      <div key={index}>
        {injury.injuryDescription && `Plaintiff ${injury.injuryDescription}`}
        {injury.date && `, ${injury.date}`}
        {injury.treatedBy && `, treated by ${injury.treatedBy}.`}
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            10.1 At any time before the INCIDENT did you have complaints or injuries that involved the same part of your body claimed to have been injured in the INCIDENT?

            {showInputs &&
              previousInjuries.map((injury, index) => (
                <div key={index}>
                  <label>
                    Injury Description:
                    <input
                      type="text"
                      value={injury.injuryDescription}
                      onChange={(e) => handleChange(e, 'injuryDescription', index)}
                    />
                  </label>
                  <label>
                    Date or Approx Date:
                    <input
                      type="text"
                      value={injury.date}
                      onChange={(e) => handleChange(e, 'date', index)}
                    />
                  </label>
                  <label>
                    Treated By:
                    <input
                      type="text"
                      value={injury.treatedBy}
                      onChange={(e) => handleChange(e, 'treatedBy', index)}
                    />
                  </label>
                </div>
              ))}

            <button type="button" onClick={addInjuryFields}>
              Add Injury
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 10.1:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section10_1;
