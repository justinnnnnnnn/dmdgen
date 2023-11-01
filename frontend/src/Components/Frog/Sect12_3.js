import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_3() {
  const [hasRecorded, setHasRecorded] = useState(false);
  const [recordedEntities, setRecordedEntities] = useState([]);
  const [customText, setCustomText] = useState('');

  const addRecordedEntity = () => {
    setRecordedEntities([...recordedEntities, { id: recordedEntities.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleRecordedEntityChange = (id, field, value) => {
    const updatedRecordedEntities = recordedEntities.map((recordedEntity) => {
      if (recordedEntity.id === id) {
        return { ...recordedEntity, [field]: value };
      }
      return recordedEntity;
    });
    setRecordedEntities(updatedRecordedEntities);
  };

  const renderRecordedEntities = () => {
    return recordedEntities.map((recordedEntity) => (
      <div key={recordedEntity.id}>
        <label>
          Name:
          <input
            type="text"
            value={recordedEntity.name}
            onChange={(e) => handleRecordedEntityChange(recordedEntity.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={recordedEntity.address}
            onChange={(e) => handleRecordedEntityChange(recordedEntity.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={recordedEntity.phoneNumber}
            onChange={(e) => handleRecordedEntityChange(recordedEntity.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const handleHasRecordedChange = (e) => {
    setHasRecorded(e.target.value === 'yes');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const renderResponse = () => {
    if (!hasRecorded) {
      return "No";
    }

    if (customText.trim() !== '') {
      return customText;
    }

    return (
      <ul>
        {recordedEntities.map((recordedEntity) => (
          <li key={recordedEntity.id}>
            {recordedEntity.name}, {recordedEntity.address}, {recordedEntity.phoneNumber}
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
            <h3>12.3 Have you or anyone on your behalf written or recorded statements concerning the incident?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasRecorded}
                  onChange={handleHasRecordedChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasRecorded}
                  onChange={handleHasRecordedChange}
                />
                Yes
              </label>
              {hasRecorded && (
                <div>
                  <button type="button" onClick={addRecordedEntity}>
                    Add Entity
                  </button>
                  {renderRecordedEntities()}
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

export default Section12_3;
