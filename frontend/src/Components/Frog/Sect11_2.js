import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section11_2() {
  const [claims, setClaims] = useState([]);

  const addClaim = () => {
    setClaims([...claims, { id: claims.length }]);
  };

  const handleInputChange = (id, name, value) => {
    const updatedClaims = claims.map((claim) => {
      if (claim.id === id) {
        return { ...claim, [name]: value };
      }
      return claim;
    });
    setClaims(updatedClaims);
  };

  const renderClaims = () => {
    return claims.map((claim, index) => (
      <div key={claim.id}>
        <h5>Claim {index + 1}</h5>
        <label>
          Description of Injury:
          <input
            type="text"
            value={claim.description || ''}
            onChange={(e) => handleInputChange(claim.id, 'description', e.target.value)}
          />
        </label>
        <label>
          Date and Time of Incident:
          <input
            type="text"
            value={claim.dateAndTime || ''}
            onChange={(e) => handleInputChange(claim.id, 'dateAndTime', e.target.value)}
          />
        </label>
        <label>
          Place of Incident:
          <input
            type="text"
            value={claim.placeOfIncident || ''}
            onChange={(e) => handleInputChange(claim.id, 'placeOfIncident', e.target.value)}
          />
        </label>
        <label>
          Name of Employer:
          <input
            type="text"
            value={claim.employerName || ''}
            onChange={(e) => handleInputChange(claim.id, 'employerName', e.target.value)}
          />
        </label>
        <label>
          Address of Employer:
          <input
            type="text"
            value={claim.employerAddress || ''}
            onChange={(e) => handleInputChange(claim.id, 'employerAddress', e.target.value)}
          />
        </label>
        <label>
          Telephone of Employer:
          <input
            type="text"
            value={claim.employerPhoneNumber || ''}
            onChange={(e) => handleInputChange(claim.id, 'employerPhoneNumber', e.target.value)}
          />
        </label>
        <label>
          Period of Time Received Workers Comp:
          <input
            type="text"
            value={claim.periodOfWorkersComp || ''}
            onChange={(e) => handleInputChange(claim.id, 'periodOfWorkersComp', e.target.value)}
          />
        </label>
        <label>
          Healthcare Provider:
          <input
            type="text"
            value={claim.healthcareProvider || ''}
            onChange={(e) => handleInputChange(claim.id, 'healthcareProvider', e.target.value)}
          />
        </label>
        <label>
          Provider Address:
          <input
            type="text"
            value={claim.providerAddress || ''}
            onChange={(e) => handleInputChange(claim.id, 'providerAddress', e.target.value)}
          />
        </label>
        <label>
          Provider Phone Number:
          <input
            type="text"
            value={claim.providerPhoneNumber || ''}
            onChange={(e) => handleInputChange(claim.id, 'providerPhoneNumber', e.target.value)}
          />
        </label>
        <label>
          Workers Comp Case Number:
          <input
            type="text"
            value={claim.workersCompCaseNumber || ''}
            onChange={(e) => handleInputChange(claim.id, 'workersCompCaseNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const renderResponse = () => {
    if (claims.length === 0) {
      return "Plaintiff has no memory of making any such claims.";
    }

    return (
      <div>
        {claims.map((claim, index) => (
          <p key={claim.id}>
            Plaintiff {claim.description && `${claim.description}`} 
            {claim.dateAndTime && ` on or about ${claim.dateAndTime}`} 
            {claim.placeOfIncident && ` ${claim.placeOfIncident}`}.
            {claim.employerName && ` Plaintiff worked for ${claim.employerName}`} 
            {claim.employerAddress && `, located ${claim.employerAddress}`} 
            {claim.employerPhoneNumber && `, ${claim.employerPhoneNumber}`}.
            {claim.periodOfWorkersComp && ` Plaintiff received workers' compensation for a period of ${claim.periodOfWorkersComp}`}.
            {claim.healthcareProvider && ` Plaintiff was treated by ${claim.healthcareProvider}`} 
            {claim.providerAddress && `, located at ${claim.providerAddress}`} 
            {claim.providerPhoneNumber && `, contactable at ${claim.providerPhoneNumber}`}.
            {claim.workersCompCaseNumber && ` Workers' compensation claim case number: ${claim.workersCompCaseNumber}`}.
          </p>
        ))}
      </div>
    );
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <p>11.2 In the past 10 years have you made a written claim or demand for workers' comp? If so, for each:</p>
            {renderClaims()}
            <button type="button" onClick={addClaim}>
              Add Claim
            </button>
          </ChildCol>
          <ChildCol>
            <p>Response to Request No. 11.2:</p>
            {renderResponse()}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section11_2;
