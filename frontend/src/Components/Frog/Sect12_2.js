import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_2() {
  const [hasInterviewed, setHasInterviewed] = useState(false);
  const [interviewees, setInterviewees] = useState([]);
  const [customText, setCustomText] = useState('');

  const addInterviewee = () => {
    setInterviewees([...interviewees, { id: interviewees.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleIntervieweeChange = (id, field, value) => {
    const updatedInterviewees = interviewees.map((interviewee) => {
      if (interviewee.id === id) {
        return { ...interviewee, [field]: value };
      }
      return interviewee;
    });
    setInterviewees(updatedInterviewees);
  };

  const renderInterviewees = () => {
    return interviewees.map((interviewee) => (
      <div key={interviewee.id}>
        <label>
          Name:
          <input
            type="text"
            value={interviewee.name}
            onChange={(e) => handleIntervieweeChange(interviewee.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={interviewee.address}
            onChange={(e) => handleIntervieweeChange(interviewee.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={interviewee.phoneNumber}
            onChange={(e) => handleIntervieweeChange(interviewee.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const handleHasInterviewedChange = (e) => {
    setHasInterviewed(e.target.value === 'yes');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const renderResponse = () => {
    if (!hasInterviewed) {
      return "No";
    }

    if (customText.trim() !== '') {
      return customText;
    }

    return (
      <ul>
        {interviewees.map((interviewee) => (
          <li key={interviewee.id}>
            {interviewee.name}, {interviewee.address}, {interviewee.phoneNumber}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <h3>12.2 Have you or anyone on your behalf interviewed anyone concerning the incident?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasInterviewed}
                  onChange={handleHasInterviewedChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasInterviewed}
                  onChange={handleHasInterviewedChange}
                />
                Yes
              </label>
              {hasInterviewed && (
                <div>
                  <button type="button" onClick={addInterviewee}>
                    Add Interviewee
                  </button>
                  {renderInterviewees()}
                </div>
              )}
              <div>
                <label>
                  Custom Response:
                  <textarea value={customText} onChange={handleCustomTextChange} />
                </label>
              </div>
            </div>
          </ChildCol>
          <ChildCol>
            <h4>Response:</h4>
            {renderResponse()}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section12_2;
