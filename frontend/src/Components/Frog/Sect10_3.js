import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section10_3() {
  const [incidents, setIncidents] = useState([]);
  const [hasIncidents, setHasIncidents] = useState(false);

  const addIncident = () => {
    setIncidents([...incidents, { id: incidents.length }]);
    setHasIncidents(true);
  };

  const handleInputChange = (id, name, value) => {
    const updatedIncidents = incidents.map((incident) => {
      if (incident.id === id) {
        return { ...incident, [name]: value };
      }
      return incident;
    });
    setIncidents(updatedIncidents);
  };

  const renderIncidents = () => {
    return incidents.map((incident, index) => (
      <div key={incident.id}>
        <h5>Incident {index + 1}</h5>
        <label>
          Injury Type:
          <input
            type="text"
            value={incident.injuryType || ''}
            onChange={(e) => handleInputChange(incident.id, 'injuryType', e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            value={incident.date || ''}
            onChange={(e) => handleInputChange(incident.id, 'date', e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={incident.location || ''}
            onChange={(e) => handleInputChange(incident.id, 'location', e.target.value)}
          />
        </label>
        {/* ... other input fields go here ... */}
        <label>
          Names of other persons involved:
          <input
            type="text"
            value={incident.otherPersons || ''}
            onChange={(e) => handleInputChange(incident.id, 'otherPersons', e.target.value)}
          />
        </label>
        <label>
          Addresses of other persons:
          <input
            type="text"
            value={incident.otherPersonsAddresses || ''}
            onChange={(e) => handleInputChange(incident.id, 'otherPersonsAddresses', e.target.value)}
          />
        </label>
        <label>
          Phone numbers of other persons:
          <input
            type="text"
            value={incident.otherPersonsPhoneNumbers || ''}
            onChange={(e) => handleInputChange(incident.id, 'otherPersonsPhoneNumbers', e.target.value)}
          />
        </label>
        <label>
          Names of healthcare providers:
          <input
            type="text"
            value={incident.healthcareProviders || ''}
            onChange={(e) => handleInputChange(incident.id, 'healthcareProviders', e.target.value)}
          />
        </label>
        <label>
          Addresses of healthcare providers:
          <input
            type="text"
            value={incident.healthcareProvidersAddresses || ''}
            onChange={(e) => handleInputChange(incident.id, 'healthcareProvidersAddresses', e.target.value)}
          />
        </label>
        <label>
          Phone numbers of healthcare providers:
          <input
            type="text"
            value={incident.healthcareProvidersPhoneNumbers || ''}
            onChange={(e) => handleInputChange(incident.id, 'healthcareProvidersPhoneNumbers', e.target.value)}
          />
        </label>
        <label>
          Treatment and Duration:
          <input
            type="text"
            value={incident.treatment || ''}
            onChange={(e) => handleInputChange(incident.id, 'treatment', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  // ...

const renderResponse = () => {
  if (!hasIncidents) {
    return "Plaintiff does not believe to have sustained any such injuries.";
  }

  return incidents.map((incident, index) => (
    <div key={incident.id}>
      <p>Incident {index + 1}:</p>
      <p>
        {incident.injuryType && `Plaintiff ${incident.injuryType} `}
        {incident.date && `on or about ${incident.date}`}
        {incident.location && `at or around ${incident.location}`}
        {incident.injuryType && `. `}
        {incident.otherPersons && `${incident.otherPersons}`}
        {incident.otherPersonsAddresses && `, ${incident.otherPersonsAddresses}`}
        {incident.otherPersonsPhoneNumbers && `, ${incident.otherPersonsPhoneNumbers}`}
        {incident.otherPersons && `. `}
        {incident.healthcareProviders && `${incident.healthcareProviders}`}
        {incident.healthcareProvidersAddresses && `, ${incident.healthcareProvidersAddresses}`}
        {incident.healthcareProvidersPhoneNumbers && `, ${incident.healthcareProvidersPhoneNumbers}`}
        {incident.healthcareProviders && `. `}
        {incident.treatment && `${incident.treatment}. `}
      </p>
    </div>
  ));
};

// ...


  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            10.3 At any time after the INCIDENT, did you sustain injuries of the kind for which you are now claiming damages? If so, for each additional incident state details:
            {renderIncidents()}
            <button type="button" onClick={addIncident}>
              Add Incident
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 10.3:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section10_3;
