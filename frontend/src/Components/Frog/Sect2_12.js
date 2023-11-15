import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_12() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialDisabilities = currentFrogData.section2_12?.disabilities || [{ person: '', address: '', phoneNumber: '', natureOfDisability: '', mannerOfContribution: '' }];

  const [localData, setLocalData] = useState({ disabilities: initialDisabilities });

  useEffect(() => {
    if (currentFrogData.section2_12) {
      setLocalData(currentFrogData.section2_12);
    }
  }, [currentFrogData.section2_12]);

  const addDisability = () => {
    const newDisabilities = [...localData.disabilities, { person: '', address: '', phoneNumber: '', natureOfDisability: '', mannerOfContribution: '' }];
    setLocalData({ ...localData, disabilities: newDisabilities });
    dispatch(updateFrogField('section2_12', { ...localData, disabilities: newDisabilities }));
  };

  const updateDisability = (index, field, value) => {
    const updatedDisabilities = localData.disabilities.map((disability, i) => {
      if (i === index) {
        return { ...disability, [field]: value };
      }
      return disability;
    });

    setLocalData({ ...localData, disabilities: updatedDisabilities });
    dispatch(updateFrogField('section2_12', { ...localData, disabilities: updatedDisabilities }));
  };

  const renderResponse = () => {
    if (localData.showDefault) {
      return "Not to Plaintiff's knowledge.";
    }

    return localData.disabilities.map((disability, index) => (
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
            <div>
              2.12 At the time of INCIDENT did you or any other person have any disabilities or conditions that may have contributed to incident occurring?
              <button type="button" onClick={addDisability}>Add Person</button>
            </div>
            {localData.disabilities.map((disability, index) => (
              <div key={index}>
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
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.12:
            <div>{renderResponse()}</div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_12;  