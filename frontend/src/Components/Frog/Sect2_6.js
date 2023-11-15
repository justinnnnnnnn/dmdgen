import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_6() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_6Data = currentFrogData.section2_6 || {
    isEmployed: null,
    presentEmployer: { name: '', address: '', phoneNumber: '' },
    pastEmployments: [{ name: '', address: '', dates: '', jobTitle: '', natureOfWork: '' }]
  };

  const [localData, setLocalData] = useState(initialSection2_6Data);

  useEffect(() => {
    if (currentFrogData.section2_6) {
      setLocalData(currentFrogData.section2_6);
    } else {
      setLocalData(initialSection2_6Data);
    }
  }, [currentFrogData.section2_6]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_6', updatedData));
  };

  const handlePastEmploymentChange = (index, key, value) => {
    const updatedEmployments = [...localData.pastEmployments];
    updatedEmployments[index][key] = value;
    handleInputChange('pastEmployments', updatedEmployments);
  };

  const renderEmploymentsResponse = () => {
    let response = "";

    if (localData.isEmployed === false) {
      response += "a) Plaintiff is not currently employed. ";
    } else if (localData.isEmployed && localData.presentEmployer.name && localData.presentEmployer.address && localData.presentEmployer.phoneNumber) {
      response += `a) Plaintiff's current employer is ${localData.presentEmployer.name}, located at ${localData.presentEmployer.address}, and can be contacted at ${localData.presentEmployer.phoneNumber}. `;
    }

    const pastEmploymentResponses = localData.pastEmployments.map((employment, index) => {
      if (employment.name && employment.address && employment.dates && employment.jobTitle && employment.natureOfWork) {
        return `Plaintiff was employed at ${employment.name}, located at ${employment.address}, from ${employment.dates}, as a ${employment.jobTitle}, where they ${employment.natureOfWork}. `;
      }
      return null;
    }).filter(Boolean);

    if (pastEmploymentResponses.length > 0) {
      response += 'b) ' + pastEmploymentResponses.join(' ');
    }

    return response.trim();
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.6 State:
            <br />
            <label>
              <input
                type="radio"
                name="isEmployed"
                checked={localData.isEmployed === false}
                onChange={() => handleInputChange('isEmployed', false)}
              /> Plaintiff is not currently employed.
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="isEmployed"
                checked={localData.isEmployed === true}
                onChange={() => handleInputChange('isEmployed', true)}
              /> Yes
            </label>
            {localData.isEmployed && (
              <>
                <br />
                <label>(a) Name of Employer or Place of Self-Employment:
                  <input
                    type="text"
                    value={localData.presentEmployer.name}
                    onChange={(e) => handleInputChange('presentEmployer', { ...localData.presentEmployer, name: e.target.value })}
                  />
                </label>
                <br />
                <label>Address:
                  <input
                    type="text"
                    value={localData.presentEmployer.address}
                    onChange={(e) => handleInputChange('presentEmployer', { ...localData.presentEmployer, address: e.target.value })}
                  />
                </label>
                <br />
                <label>Phone Number:
                  <input
                    type="text"
                    value={localData.presentEmployer.phoneNumber}
                    onChange={(e) => handleInputChange('presentEmployer', { ...localData.presentEmployer, phoneNumber: e.target.value })}
                  />
                </label>
              </>
            )}
            <br />
            <label>(b) Past Employments:</label>
            {localData.pastEmployments.map((employment, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Name of Employer or Place of Self-Employment"
                  value={employment.name}
                  onChange={(e) => handlePastEmploymentChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={employment.address}
                  onChange={(e) => handlePastEmploymentChange(index, 'address', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Dates of Employment"
                  value={employment.dates}
                  onChange={(e) => handlePastEmploymentChange(index, 'dates', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  value={employment.jobTitle}
                  onChange={(e) => handlePastEmploymentChange(index, 'jobTitle', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nature of Work"
                  value={employment.natureOfWork}
                  onChange={(e) => handlePastEmploymentChange(index, 'natureOfWork', e.target.value)}
                />
              </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.6:
            <div>
              {renderEmploymentsResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_6;
