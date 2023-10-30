import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section11_1() {
  const [claims, setClaims] = useState([]);
  const [hasClaims, setHasClaims] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const addClaim = () => {
    setClaims([...claims, { id: claims.length }]);
    setHasClaims(true);
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
          Injury Type:
          <input
            type="text"
            value={claim.injury || ''}
            onChange={(e) => handleInputChange(claim.id, 'injury', e.target.value)}
          />
        </label>
        <label>
          Date and Time:
          <input
            type="text"
            value={claim.dateAndTime || ''}
            onChange={(e) => handleInputChange(claim.id, 'dateAndTime', e.target.value)}
          />
        </label>
        <label>
          Location and Address:
          <input
            type="text"
            value={claim.locationAndAddress || ''}
            onChange={(e) => handleInputChange(claim.id, 'locationAndAddress', e.target.value)}
          />
        </label>
        <label>
          Defendants:
          <input
            type="text"
            value={claim.defendants || ''}
            onChange={(e) => handleInputChange(claim.id, 'defendants', e.target.value)}
          />
        </label>
        <label>
          Addresses:
          <input
            type="text"
            value={claim.addresses || ''}
            onChange={(e) => handleInputChange(claim.id, 'addresses', e.target.value)}
          />
        </label>
        <label>
          Phone Numbers:
          <input
            type="text"
            value={claim.phoneNumbers || ''}
            onChange={(e) => handleInputChange(claim.id, 'phoneNumbers', e.target.value)}
          />
        </label>
        <label>
          Court:
          <input
            type="text"
            value={claim.court || ''}
            onChange={(e) => handleInputChange(claim.id, 'court', e.target.value)}
          />
        </label>
        <label>
          Name of Parties:
          <input
            type="text"
            value={claim.nameOfParties || ''}
            onChange={(e) => handleInputChange(claim.id, 'nameOfParties', e.target.value)}
          />
        </label>
        <label>
          Case Number:
          <input
            type="text"
            value={claim.caseNumber || ''}
            onChange={(e) => handleInputChange(claim.id, 'caseNumber', e.target.value)}
          />
        </label>
        <label>
          Name of Your Attorney:
          <input
            type="text"
            value={claim.attorneyName || ''}
            onChange={(e) => handleInputChange(claim.id, 'attorneyName', e.target.value)}
          />
        </label>
        <label>
          Address of Attorney:
          <input
            type="text"
            value={claim.attorneyAddress || ''}
            onChange={(e) => handleInputChange(claim.id, 'attorneyAddress', e.target.value)}
          />
        </label>
        <label>
          Phone Number of Attorney:
          <input
            type="text"
            value={claim.attorneyPhoneNumber || ''}
            onChange={(e) => handleInputChange(claim.id, 'attorneyPhoneNumber', e.target.value)}
          />
        </label>
        <label>
          Claim Status (Resolved/Pending):
          <input
            type="text"
            value={claim.claimStatus || ''}
            onChange={(e) => handleInputChange(claim.id, 'claimStatus', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const renderResponse = () => {
    if (!hasClaims) {
      return "Plaintiff has no memory of making such claims.";
    }

    return (
      <div>
        {claims.map((claim, index) => (
          <div key={claim.id}>
            <p>Claim {index + 1}:</p>
            <p>
              Plaintiff claimed {claim.injury} on
              {claim.dateAndTime && ` on ${claim.dateAndTime}`} 
              {claim.locationAndAddress && ` at ${claim.locationAndAddress}`}.
              {claim.defendants && ` Defendants were ${claim.defendants}`} 
              {claim.addresses && ` located at ${claim.addresses}`} 
              {claim.phoneNumbers && `, contactable at ${claim.phoneNumbers}`}.
              {claim.court && ` The case proceeded in ${claim.court}, under the name ${claim.nameOfParties}, case number ${claim.caseNumber}.`} 
              {claim.attorneyName && ` Plaintiff was represented by ${claim.attorneyName}, located at ${claim.attorneyAddress}, contactable at ${claim.attorneyPhoneNumber}.`} 
              {claim.claimStatus && ` The claim status is ${claim.claimStatus}`}.
              </p>
          </div>
        ))}
        {additionalInfo && <p>{additionalInfo}</p>}
      </div>
    );
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <p>11.1 Except for this past action, in the past 10 years have you filed an action or made a written claim or demand for compensation for your personal injuries?</p>
            {renderClaims()}
            <button type="button" onClick={addClaim}>
              Add Claim
            </button>
            <label>
              Additional Information:
              <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </label>
          </ChildCol>
          <ChildCol>
            <p>Response to Request No. 11.1:</p>
            {renderResponse()}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section11_1;
