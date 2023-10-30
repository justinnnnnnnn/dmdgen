import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect7_1() {
  const [damagedItems, setDamagedItems] = useState([]);

  const addDamagedItem = () => {
    setDamagedItems([
      ...damagedItems,
      { itemType: '', description: '', value: '', calculation: '', sold: false, buyerInfo: { name: '', address: '', phoneNumber: '', date: '', salePrice: '' } }
    ]);
  };

  const updateDamagedItem = (index, field, value) => {
    const updatedDamagedItems = damagedItems.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setDamagedItems(updatedDamagedItems);
  };

  const updateBuyerInfo = (index, field, value) => {
    const updatedDamagedItems = damagedItems.map((item, i) => {
      if (i === index) {
        return { ...item, buyerInfo: { ...item.buyerInfo, [field]: value } };
      }
      return item;
    });
    setDamagedItems(updatedDamagedItems);
  };

  const renderDamagedItemFields = () => {
    return damagedItems.map((item, index) => (
      <div key={index}>
        <label>
          Item Type:
          <input
            type="text"
            value={item.itemType}
            onChange={(e) => updateDamagedItem(index, 'itemType', e.target.value)}
          />
        </label>
        <br/>
        <label>
          Description:
          <input
            type="text"
            value={item.description}
            onChange={(e) => updateDamagedItem(index, 'description', e.target.value)}
          />
        </label>
        <br/>
        <label>
          Damages Estimated At:
          <input
            type="text"
            value={item.value}
            onChange={(e) => updateDamagedItem(index, 'value', e.target.value)}
          />
        </label>
        <br/>
        <label>
          Calculation Method:
          <input
            type="text"
            value={item.calculation}
            onChange={(e) => updateDamagedItem(index, 'calculation', e.target.value)}
          />
        </label>
        <br/>
        <label>
          Sold:
          <input
            type="checkbox"
            checked={item.sold}
            onChange={(e) => updateDamagedItem(index, 'sold', e.target.checked)}
          />
        </label>
        <br/>
        {item.sold && (
          <div>
            <label>
              Buyer's Name:
              <input
                type="text"
                value={item.buyerInfo.name}
                onChange={(e) => updateBuyerInfo(index, 'name', e.target.value)}
              />
            </label>
            <br/>
            <label>
              Buyer's Address:
              <input
                type="text"
                value={item.buyerInfo.address}
                onChange={(e) => updateBuyerInfo(index, 'address', e.target.value)}
              />
            </label>
            <br/>
            <label>
              Buyer's Phone Number:
              <input
                type="text"
                value={item.buyerInfo.phoneNumber}
                onChange={(e) => updateBuyerInfo(index, 'phoneNumber', e.target.value)}
              />
            </label>
            <br/>
            <label>
              Date of Sale:
              <input
                type="text"
                value={item.buyerInfo.date}
                onChange={(e) => updateBuyerInfo(index, 'date', e.target.value)}
              />
            </label>
            <br/>
            <label>
              Sale Price:
              <input
                type="text"
                value={item.buyerInfo.salePrice}
                onChange={(e) => updateBuyerInfo(index, 'salePrice', e.target.value)}
              />
            </label>
          </div>
        )}
      </div>
    ));
  };

  const renderResponse = () => {
    if (damagedItems.length === 0) {
      return "No";
    }
    const formattedDamagedItems = damagedItems.map((item) => {
      let response = `INCIDENT caused damage to the following: ${item.itemType} ${item.description}`;
      if (item.value) {
        response += `, damages estimated at ${item.value}`;
      }
      if (item.calculation) {
        response += ` ${item.calculation}`;
      }
      response += ".";
      if (item.sold && item.buyerInfo.name) {
        response += ` The item was sold to ${item.buyerInfo.name}`;
        if (item.buyerInfo.address || item.buyerInfo.phoneNumber || item.buyerInfo.date || item.buyerInfo.salePrice) {
          response += `, with details:`;
          if (item.buyerInfo.address) {
            response += ` address: ${item.buyerInfo.address},`;
          }
          if (item.buyerInfo.phoneNumber) {
            response += ` phone number: ${item.buyerInfo.phoneNumber},`;
          }
          if (item.buyerInfo.date) {
            response += ` date of sale: ${item.buyerInfo.date},`;
          }
          if (item.buyerInfo.salePrice) {
            response += ` sale price: ${item.buyerInfo.salePrice},`;
          }
          // Remove the last comma
          response = response.slice(0, -1);
        }
        response += ".";
      }
      return response;
    }).join(' ');
    return `Yes. ${formattedDamagedItems}`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            7.1 Did incident cause damage or loss to vehicle or other property?
            {renderDamagedItemFields()}
            <button type="button" onClick={addDamagedItem}>
              Add Damaged Item
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 7.1:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect7_1;
