import React, { useState, useEffect } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect6_5() {
  const [medications, setMedications] = useState([{ name: '' }]);

  useEffect(() => {
    if (medications[medications.length - 1].name.trim() !== '') {
      setMedications([...medications, { name: '' }]);
    }
  }, [medications]);

  const updateMedication = (index, value) => {
    const updatedMedications = medications.map((medication, i) => {
      if (i === index) {
        return { name: value };
      }
      return medication;
    });
    setMedications(updatedMedications);
  };

  const renderResponse = () => {
    const filledMedications = medications.filter(medication => medication.name.trim() !== '');
  
    if (filledMedications.length === 0) {
      return "Plaintiff does not recall taking any medications.";
    }
  
    const medicationList = filledMedications.map(medication => medication.name.trim());
  
    let formattedList;
    if (medicationList.length === 1) {
      formattedList = medicationList[0];
    } else if (medicationList.length === 2) {
      formattedList = medicationList.join(' and ');
    } else {
      formattedList = medicationList.slice(0, -1).join(', ') + ', and ' + medicationList.slice(-1);
    }
  
    return `Plaintiff recalls taking ${formattedList}. Plaintiff may have taken other medications, the ones listed are per Plaintiff's best recollection. Plaintiff refers propounding party to the attached medical records.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            6.5 Medications as a result of the incident:
            {medications.map((medication, index) => (
              <div key={index}>
                <label>
                  Medication:
                  <input
                    type="text"
                    value={medication.name}
                    onChange={(e) => updateMedication(index, e.target.value)}
                  />
                </label>
              </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request No. 6.5:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect6_5;
