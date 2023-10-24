// Section2_5.js
import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_5() {
  const [presentAddressSinceDate, setPresentAddressSinceDate] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [pastAddresses, setPastAddresses] = useState([{ address: '', fromDate: '', toDate: '' }]);

  const handlePastAddressChange = (index, key, value) => {
    const updatedAddresses = [...pastAddresses];
    updatedAddresses[index][key] = value;
    setPastAddresses(updatedAddresses);
  
    if (index === updatedAddresses.length - 1 && key === 'fromDate' && value) {
      setPastAddresses([...updatedAddresses, { address: '', fromDate: '', toDate: '' }]);
    }
  };

  const renderAddressesResponse = () => {
    if (!presentAddress || !presentAddressSinceDate) {
      return "";
    }

    let response = `a-c) Plaintiff's current address is ${presentAddress} and has lived there since ${presentAddressSinceDate}. `;
  
    if (pastAddresses.length > 0) {
      for (let i = 0; i < pastAddresses.length; i++) {
        const currentAddress = pastAddresses[i];
        if (!currentAddress.address || !currentAddress.fromDate) {
          continue; // Skip this iteration if the address or fromDate is missing
        }

        const previousAddress = pastAddresses[i - 1] || { fromDate: presentAddressSinceDate };
        if (!previousAddress.fromDate) {
          continue; // Skip this iteration if the previous fromDate is missing
        }
      
        response += `Plaintiff lived at ${currentAddress.address} from ${currentAddress.fromDate} to ${previousAddress.fromDate}. `;
      }
    }

    return response.trim();
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            2.5 State:
            <br />
            <label>(a) Your present residence ADDRESS:
              <input 
                  type="text" 
                  value={presentAddress} 
                  onChange={(e) => setPresentAddress(e.target.value)}
              />
              <input 
                  type="text" 
                  placeholder="Since Date"
                  value={presentAddressSinceDate} 
                  onChange={(e) => setPresentAddressSinceDate(e.target.value)}
              />
            </label>
            <br />
            <label>(b) Your residence ADDRESSES for the past five years:</label>
            {pastAddresses.map((pastAddress, index) => (
                <div key={index}>
                    <input 
                        type="text" 
                        placeholder="Address"
                        value={pastAddress.address} 
                        onChange={(e) => handlePastAddressChange(index, 'address', e.target.value)}
                    />
                    {index === 0 ? (
                        <input 
                            type="text" 
                            placeholder="Since Date"
                            value={pastAddress.fromDate} 
                            onChange={(e) => handlePastAddressChange(index, 'fromDate', e.target.value)}
                        />
                    ) : (
                        <input 
                            type="text" 
                            placeholder="Until Date"
                            value={pastAddress.fromDate} 
                            onChange={(e) => handlePastAddressChange(index, 'fromDate', e.target.value)}
                        />
                    )}
                </div>
            ))}
          </ChildCol>
          <ChildCol>
            Response to Request No. 2.5:
            {renderAddressesResponse()}
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section2_5;
