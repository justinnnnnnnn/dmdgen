import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_6() {
  const [hasReports, setHasReports] = useState(false);
  const [reportEntities, setReportEntities] = useState([]);
  const [customText, setCustomText] = useState('');

  const addReportEntity = () => {
    setReportEntities([...reportEntities, { id: reportEntities.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleReportEntityChange = (id, field, value) => {
    const updatedReportEntities = reportEntities.map((reportEntity) => {
      if (reportEntity.id === id) {
        return { ...reportEntity, [field]: value };
      }
      return reportEntity;
    });
    setReportEntities(updatedReportEntities);
  };

  const renderReportEntities = () => {
    return reportEntities.map((reportEntity) => (
      <div key={reportEntity.id}>
        <label>
          Name:
          <input
            type="text"
            value={reportEntity.name}
            onChange={(e) => handleReportEntityChange(reportEntity.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={reportEntity.address}
            onChange={(e) => handleReportEntityChange(reportEntity.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={reportEntity.phoneNumber}
            onChange={(e) => handleReportEntityChange(reportEntity.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const handleHasReportsChange = (e) => {
    setHasReports(e.target.value === 'yes');
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const renderResponse = () => {
    if (!hasReports) {
      return "No";
    }

    if (customText.trim() !== '') {
      return customText;
    }

    return (
      <ul>
        {reportEntities.map((reportEntity) => (
          <li key={reportEntity.id}>
            {reportEntity.name}, {reportEntity.address}, {reportEntity.phoneNumber}
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
            <h3>12.6 Do you know of any reports made by any person concerning the incident?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={!hasReports}
                  onChange={handleHasReportsChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={hasReports}
                  onChange={handleHasReportsChange}
                />
                Yes
              </label>
              {hasReports && (
                <div>
                  <button type="button" onClick={addReportEntity}>
                    Add Entity
                  </button>
                  {renderReportEntities()}
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

export default Section12_6;
