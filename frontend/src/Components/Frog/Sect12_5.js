import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_5() {
  const [hasDiagram, setHasDiagram] = useState(false);
  const [diagramEntities, setDiagramEntities] = useState([]);
  const [customText, setCustomText] = useState('');

  const addDiagramEntity = () => {
    setDiagramEntities([...diagramEntities, { id: diagramEntities.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleDiagramEntityChange = (id, field, value) => {
    const updatedDiagramEntities = diagramEntities.map((diagramEntity) => {
      if (diagramEntity.id === id) {
        return { ...diagramEntity, [field]: value };
      }
      return diagramEntity;
    });
    setDiagramEntities(updatedDiagramEntities);
  };

  const renderDiagramEntities = () => {
    return diagramEntities.map((diagramEntity) => (
      <div key={diagramEntity.id}>
        <label>
          Name:
          <input
            type="text"
            value={diagramEntity.name}
            onChange={(e) => handleDiagramEntityChange(diagramEntity.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={diagramEntity.address}
            onChange={(e) => handleDiagramEntityChange(diagramEntity.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={diagramEntity.phoneNumber}
            onChange={(e) => handleDiagramEntityChange(diagramEntity.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const handleHasDiagramChange = (e) => {
    setHasDiagram(e.target.value === 'yes');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const renderResponse = () => {
    if (!hasDiagram) {
      return "No";
    }

    if (customText.trim() !== '') {
      return customText;
    }

    return (
      <ul>
        {diagramEntities.map((diagramEntity) => (
          <li key={diagramEntity.id}>
            {diagramEntity.name}, {diagramEntity.address}, {diagramEntity.phoneNumber}
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
            <h3>12.5 Do you know of any diagrams, reproductions, or models concerning the incident?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasDiagram}
                  onChange={handleHasDiagramChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasDiagram}
                  onChange={handleHasDiagramChange}
                />
                Yes
              </label>
              {hasDiagram && (
                <div>
                  <button type="button" onClick={addDiagramEntity}>
                    Add Entity
                  </button>
                  {renderDiagramEntities()}
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

export default Section12_5;
