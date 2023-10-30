import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect7_2() {
  const [estimates, setEstimates] = useState([]);

  const addEstimate = () => {
    setEstimates([
      ...estimates,
      { amount: '', preparer: '', address: '', phoneNumber: '', datePrepared: '', copyName: '', copyAddress: '', copyPhoneNumber: '' }
    ]);
  };

  const updateEstimate = (index, field, value) => {
    const updatedEstimates = estimates.map((entry, i) => {
      if (i === index) {
        return { ...entry, [field]: value };
      }
      return entry;
    });
    setEstimates(updatedEstimates);
  };

  const renderResponse = () => {
    if (estimates.length === 0) {
      return "Not Applicable";
    }

    return estimates.map((entry, index) => (
      <div key={index}>
        {entry.amount && <span>{entry.amount} assessed by </span>}
        {entry.preparer && <span>{entry.preparer}</span>}
        {entry.address && <span>, {entry.address}</span>}
        {entry.phoneNumber && <span>, {entry.phoneNumber}</span>}
        {entry.datePrepared && <span>, {entry.datePrepared}</span>}
        {entry.copyName && <span>. Copy provided to {entry.copyName}</span>}
        {entry.copyAddress && <span>, {entry.copyAddress}</span>}
        {entry.copyPhoneNumber && <span>, {entry.copyPhoneNumber}</span>}
        <span>.</span>
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            7.2 Has a written estimate or evaluation been made for any item of property referred to in the preceding question?
            {estimates.map((entry, index) => (
              <div key={index}>
                <br />
                <label>
                  Amount of Damages:
                  <input
                    type="text"
                    value={entry.amount}
                    onChange={(e) => updateEstimate(index, 'amount', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Name of Preparer:
                  <input
                    type="text"
                    value={entry.preparer}
                    onChange={(e) => updateEstimate(index, 'preparer', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={entry.address}
                    onChange={(e) => updateEstimate(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={entry.phoneNumber}
                    onChange={(e) => updateEstimate(index, 'phoneNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Date Prepared:
                  <input
                    type="text"
                    value={entry.datePrepared}
                    onChange={(e) => updateEstimate(index, 'datePrepared', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Copy Name:
                  <input
                    type="text"
                    value={entry.copyName}
                    onChange={(e) => updateEstimate(index, 'copyName', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Copy Address:
                  <input
                    type="text"
                    value={entry.copyAddress}
                    onChange={(e) => updateEstimate(index, 'copyAddress', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Copy Phone Number:
                  <input
                    type="text"
                    value={entry.copyPhoneNumber}
                    onChange={(e) => updateEstimate(index, 'copyPhoneNumber', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addEstimate}>
              Add Estimate
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 7.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect7_2;
