import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_12() {
  const [disabilities, setDisabilities] = useState([]);
  const [showDefault, setShowDefault] = useState(true);

  const addDisability = () => {
    setDisabilities([
      ...disabilities,
      { person: '', address: '', phoneNumber: '', natureOfDisability: '', mannerOfContribution: '' }
    ]);
    setShowDefault(false);
  };

  const updateDisability = (index, field, value) => {
    const updatedDisabilities = disabilities.map((disability, i) => {
      if (i === index) {
        return { ...disability, [field]: value };
      }
      return disability;
    });
    setDisabilities(updatedDisabilities);
  };

  const renderResponse = () => {
    if (showDefault) {
      return "Not to Plaintiff's knowledge.";
    }

    return disabilities.map((disability, index) => (
      <div key={index}>
        {disability.person}, {disability.address}. {disability.phoneNumber}, with {disability.natureOfDisability} {disability.mannerOfContribution}
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.12 At the time of INCIDENT did you or any other person have any disabilities or conditions that may have contributed to incident occurring?
            {disabilities.map((disability, index) => (
              <div key={index}>
                <br />
                <label>
                  Person:
                  <input
                    type="text"
                    value={disability.person}
                    onChange={(e) => updateDisability(index, 'person', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={disability.address}
                    onChange={(e) => updateDisability(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={disability.phoneNumber}
                    onChange={(e) => updateDisability(index, 'phoneNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Nature of Disability:
                  <input
                    type="text"
                    value={disability.natureOfDisability}
                    onChange={(e) => updateDisability(index, 'natureOfDisability', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Manner of Contribution to Incident:
                  <input
                    type="text"
                    value={disability.mannerOfContribution}
                    onChange={(e) => updateDisability(index, 'mannerOfContribution', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addDisability}>
              Add Person
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.12:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_12;
