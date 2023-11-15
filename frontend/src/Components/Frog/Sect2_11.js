import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect2_11() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_11Data = currentFrogData.section2_11 || {
    isAgentOrEmployee: null,
    employer: '',
    address: '',
    phoneNumber: '',
    activity: ''
  };

  const [localData, setLocalData] = useState(initialSection2_11Data);

  useEffect(() => {
    if (currentFrogData.section2_11) {
      setLocalData(currentFrogData.section2_11);
    } else {
      // Reset to default values if there is no data in the Redux store
      setLocalData({
        isAgentOrEmployee: null,
        employer: '',
        address: '',
        phoneNumber: '',
        activity: ''
      });
    }
  }, [currentFrogData.section2_11]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_11', updatedData));
  };

  const renderResponse = () => {
    let response = localData.isAgentOrEmployee ? 'Yes.' : 'No.';

    if (localData.isAgentOrEmployee) {
      response += ` Plaintiff was working for ${localData.employer} at ${localData.address}, ${localData.phoneNumber}, ${localData.activity}`;
    }

    return response;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.11 At the time of the INCIDENT were you acting as an agent or employee for any PERSON? If so, state:
            <br />
            <label>
              <input
                type="radio"
                name="isAgentOrEmployee"
                checked={localData.isAgentOrEmployee === false}
                onChange={() => handleInputChange('isAgentOrEmployee', false)}
              /> No
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="isAgentOrEmployee"
                checked={localData.isAgentOrEmployee === true}
                onChange={() => handleInputChange('isAgentOrEmployee', true)}
              /> Yes
            </label>
            {localData.isAgentOrEmployee && (
              <>
                <br />
                <label>
                  Employer:
                  <input
                    type="text"
                    value={localData.employer}
                    onChange={(e) => handleInputChange('employer', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={localData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={localData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Activity:
                  <input
                    type="text"
                    value={localData.activity}
                    onChange={(e) => handleInputChange('activity', e.target.value)}
                  />
                </label>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.11:
            <div>
              {localData.isAgentOrEmployee !== null && renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect2_11;
