// Sect2_5.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFrogField } from '../../store/frog';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section2_5() {
  const dispatch = useDispatch();
  const currentFrogData = useSelector((state) => state.frog.currentFrog?.data || {});
  const initialSection2_5Data = currentFrogData.section2_5 || {
    presentAddressSinceDate: '',
    presentAddress: '',
    pastAddresses: [{ address: '', fromDate: '', toDate: '' }]
  };

  const [localData, setLocalData] = useState(initialSection2_5Data);

  useEffect(() => {
    if (currentFrogData.section2_5) {
      setLocalData(currentFrogData.section2_5);
    } else {
      setLocalData({
        presentAddressSinceDate: '',
        presentAddress: '',
        pastAddresses: [{ address: '', fromDate: '', toDate: '' }]
      });
    }
  }, [currentFrogData.section2_5]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...localData, [field]: value };
    setLocalData(updatedData);
    dispatch(updateFrogField('section2_5', updatedData));
  };

  const handlePastAddressChange = (index, key, value) => {
    let updatedAddresses = [...localData.pastAddresses];
    updatedAddresses[index][key] = value;
    if (index === updatedAddresses.length - 1 && key === 'fromDate' && value) {
      updatedAddresses = [...updatedAddresses, { address: '', fromDate: '', toDate: '' }];
    }
    handleInputChange('pastAddresses', updatedAddresses);
  };

  const renderAddressesResponse = () => {
    let response = `a-c) Plaintiff's current address is ${localData.presentAddress} and has lived there since ${localData.presentAddressSinceDate}. `;
  
    localData.pastAddresses.forEach((address, index) => {
      if (address.address && address.fromDate) {
        const toDate = index > 0 ? localData.pastAddresses[index - 1].fromDate : localData.presentAddressSinceDate;
        response += `Plaintiff lived at ${address.address} from ${address.fromDate} to ${toDate}. `;
      }
    });

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
                value={localData.presentAddress} 
                onChange={(e) => handleInputChange('presentAddress', e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Since Date"
                value={localData.presentAddressSinceDate} 
                onChange={(e) => handleInputChange('presentAddressSinceDate', e.target.value)}
              />
            </label>
            <br />
            <label>(b) Your residence ADDRESSES for the past five years:</label>
            {localData.pastAddresses.map((pastAddress, index) => (
              <div key={index}>
                <input 
                  type="text" 
                  placeholder="Address"
                  value={pastAddress.address} 
                  onChange={(e) => handlePastAddressChange(index, 'address', e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder={index === 0 ? "Since Date" : "Until Date"}
                  value={pastAddress.fromDate} 
                  onChange={(e) => handlePastAddressChange(index, 'fromDate', e.target.value)}
                />
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
