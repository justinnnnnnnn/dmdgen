import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_3() {
  const [hasMedia, setHasMedia] = useState(false);
  const [mediaEntities, setMediaEntities] = useState([]);
  const [customText, setCustomText] = useState('');

  const addMediaEntity = () => {
    setMediaEntities([...mediaEntities, { id: mediaEntities.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleMediaEntityChange = (id, field, value) => {
    const updatedMediaEntities = mediaEntities.map((mediaEntity) => {
      if (mediaEntity.id === id) {
        return { ...mediaEntity, [field]: value };
      }
      return mediaEntity;
    });
    setMediaEntities(updatedMediaEntities);
  };

  const renderMediaEntities = () => {
    return mediaEntities.map((mediaEntity) => (
      <div key={mediaEntity.id}>
        <label>
          Name:
          <input
            type="text"
            value={mediaEntity.name}
            onChange={(e) => handleMediaEntityChange(mediaEntity.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={mediaEntity.address}
            onChange={(e) => handleMediaEntityChange(mediaEntity.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={mediaEntity.phoneNumber}
            onChange={(e) => handleMediaEntityChange(mediaEntity.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const handleHasMediaChange = (e) => {
    setHasMedia(e.target.value === 'yes');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const renderResponse = () => {
    if (!hasMedia) {
      return "No";
    }

    if (customText.trim() !== '') {
      return customText;
    }

    return (
      <ul>
        {mediaEntities.map((mediaEntity) => (
          <li key={mediaEntity.id}>
            {mediaEntity.name}, {mediaEntity.address}, {mediaEntity.phoneNumber}
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
            <h3>12.3 Do you know of any recordings, photographs, or videos concerning the incident?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasMedia}
                  onChange={handleHasMediaChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasMedia}
                  onChange={handleHasMediaChange}
                />
                Yes
              </label>
              {hasMedia && (
                <div>
                  <button type="button" onClick={addMediaEntity}>
                    Add Entity
                  </button>
                  {renderMediaEntities()}
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
