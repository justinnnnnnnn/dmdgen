import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_13() {
  const [substanceUse, setSubstanceUse] = useState([
    { person: '', address: '', phoneNumber: '', substance: '', location: '', time: '', presentPeople: '', prescribedBy: '', reason: '' }
  ]);

  const addSubstanceUse = () => {
    setSubstanceUse([
      ...substanceUse,
      { person: '', address: '', phoneNumber: '', substance: '', location: '', time: '', presentPeople: '', prescribedBy: '', reason: '' }
    ]);
  };

  const updateSubstanceUse = (index, field, value) => {
    const updatedSubstanceUse = substanceUse.map((entry, i) => {
      if (i === index) {
        return { ...entry, [field]: value };
      }
      return entry;
    });
    setSubstanceUse(updatedSubstanceUse);
  };

  const renderResponse = () => {
    if (substanceUse.length === 1 && Object.values(substanceUse[0]).every(v => v === '')) {
      return "Plaintiff does not recall taking or using any drugs, alcohol, or medications before the INCIDENT.";
    }

    return substanceUse.map((entry, index) => {
      if (Object.values(entry).some(v => v !== '')) {
        return (
          <div key={index}>
            {entry.person}, {entry.address}, {entry.phoneNumber}, {entry.substance}, at {entry.location} at {entry.time}, with {entry.presentPeople} present.
            {entry.prescribedBy && entry.reason && (
              <span> Prescribed by {entry.prescribedBy} for {entry.reason}.</span>
            )}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.13 Within 24 hours before the INCIDENT did you or any person involved in the INCIDENT use or take any of the following substances: alcoholic beverage, marijuana, or other drug or medication of any kind (prescription or not)?
            {substanceUse.map((entry, index) => (
              <div key={index}>
                <br />
                <label>
                  Person:
                  <input
                    type="text"
                    value={entry.person}
                    onChange={(e) => updateSubstanceUse(index, 'person', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={entry.address}
                    onChange={(e) => updateSubstanceUse(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={entry.phoneNumber}
                    onChange={(e) => updateSubstanceUse(index, 'phoneNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Substance:
                  <input
                    type="text"
                    value={entry.substance}
                    onChange={(e) => updateSubstanceUse(index, 'substance', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Location:
                  <input
                    type="text"
                    value={entry.location}
                    onChange={(e) => updateSubstanceUse(index, 'location', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Time:
                  <input
                    type="text"
                    value={entry.time}
                    onChange={(e) => updateSubstanceUse(index, 'time', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  People Present:
                  <input
                    type="text"
                    value={entry.presentPeople}
                    onChange={(e) => updateSubstanceUse(index, 'presentPeople', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Prescribed by:
                  <input
                    type="text"
                    value={entry.prescribedBy}
                    onChange={(e) => updateSubstanceUse(index, 'prescribedBy', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Reason:
                  <input
                    type="text"
                    value={entry.reason}
                    onChange={(e) => updateSubstanceUse(index, 'reason', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addSubstanceUse}>
              Add Another Entry
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.13:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_13;
