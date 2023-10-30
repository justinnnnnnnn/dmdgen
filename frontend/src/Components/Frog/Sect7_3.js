import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect7_3() {
  const [repairs, setRepairs] = useState([]);

  const addRepair = () => {
    setRepairs([
      ...repairs,
      { itemRepaired: '', repairDetails: '', cost: '', repairerName: '', address: '', phoneNumber: '', paidBy: '', paidByAddress: '', paidByPhoneNumber: '' }
    ]);
  };

  const updateRepair = (index, field, value) => {
    const updatedRepairs = repairs.map((repair, i) => {
      if (i === index) {
        return { ...repair, [field]: value };
      }
      return repair;
    });
    setRepairs(updatedRepairs);
  };

  const renderResponse = () => {
    if (repairs.length === 0) {
      return "Not applicable.";
    }

    return repairs.map((repair, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        {repair.itemRepaired && <span>{repair.itemRepaired}</span>}
        {repair.repairDetails && <span>, repaired by {repair.repairDetails}</span>}
        {repair.cost && <span>, at a cost of {repair.cost}</span>}
        {repair.repairerName && <span>, by {repair.repairerName}</span>}
        {repair.address && <span>, at {repair.address}</span>}
        {repair.phoneNumber && <span>, {repair.phoneNumber}</span>}
        {repair.paidBy && <span>, paid for by {repair.paidBy}</span>}
        {repair.paidByAddress && <span>, at {repair.paidByAddress}</span>}
        {repair.paidByPhoneNumber && <span>, {repair.paidByPhoneNumber}</span>}
        <span>.</span>
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            7.3 Have any of these items been repaired?
            {repairs.map((repair, index) => (
              <div key={index}>
                <br />
                <label>
                  Item Repaired:
                  <input
                    type="text"
                    value={repair.itemRepaired}
                    onChange={(e) => updateRepair(index, 'itemRepaired', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Repair Details:
                  <input
                    type="text"
                    value={repair.repairDetails}
                    onChange={(e) => updateRepair(index, 'repairDetails', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Cost:
                  <input
                    type="text"
                    value={repair.cost}
                    onChange={(e) => updateRepair(index, 'cost', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Repairer Name:
                  <input
                    type="text"
                    value={repair.repairerName}
                    onChange={(e) => updateRepair(index, 'repairerName', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Address:
                  <input
                    type="text"
                    value={repair.address}
                    onChange={(e) => updateRepair(index, 'address', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="text"
                    value={repair.phoneNumber}
                    onChange={(e) => updateRepair(index, 'phoneNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Paid By:
                  <input
                    type="text"
                    value={repair.paidBy}
                    onChange={(e) => updateRepair(index, 'paidBy', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Paid By Address:
                  <input
                    type="text"
                    value={repair.paidByAddress}
                    onChange={(e) => updateRepair(index, 'paidByAddress', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Paid By Phone Number:
                  <input
                    type="text"
                    value={repair.paidByPhoneNumber}
                    onChange={(e) => updateRepair(index, 'paidByPhoneNumber', e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addRepair} style={{ marginTop: '10px' }}>
              Add Item
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 7.3:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect7_3;
