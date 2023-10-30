import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect4_1() {
  const [insurances, setInsurances] = useState([]);
  const [showDefault, setShowDefault] = useState(true);

  const addInsurance = () => {
    setInsurances([
      ...insurances,
      { medicalProvider: '', medicalRecordNumber: '', additionalInfo: '' }
    ]);
    setShowDefault(false);
  };

  const updateInsurance = (index, field, value) => {
    const updatedInsurances = insurances.map((insurance, i) => {
      if (i === index) {
        return { ...insurance, [field]: value };
      }
      return insurance;
    });
    setInsurances(updatedInsurances);
  };

  const renderResponse = () => {
    if (showDefault) {
      return "Not to Plaintiff's knowledge.";
    }

    return insurances.map((insurance, index) => (
      <div key={index}>
        Plaintiff's {insurance.medicalProvider} Medical Record Number is {insurance.medicalRecordNumber}.
        {insurance.additionalInfo && ` ${insurance.additionalInfo}`}
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            4.1 At the time of INCIDENT, was there any insurance?
            {insurances.map((insurance, index) => (
              <div key={index}>
                <br />
                <label>
                  Medical Provider:
                  <input
                    type="text"
                    value={insurance.medicalProvider}
                    onChange={(e) => updateInsurance(index, 'medicalProvider', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Medical Record Number:
                  <input
                    type="text"
                    value={insurance.medicalRecordNumber}
                    onChange={(e) => updateInsurance(index, 'medicalRecordNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Any Additional Information:
                  <input
                    type="text"
                    value={insurance.additionalInfo}
                    onChange={(e) => updateInsurance(index, 'additionalInfo', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addInsurance}>
              Add Another Entry
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 4.1:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect4_1;
