import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section12_1() {
  const [witnesses, setWitnesses] = useState([]);
  const [witnessStatement, setWitnessStatement] = useState('');

  const addWitness = () => {
    setWitnesses([...witnesses, { id: witnesses.length, name: '', address: '', phoneNumber: '' }]);
  };

  const handleWitnessChange = (id, field, value) => {
    const updatedWitnesses = witnesses.map((witness) => {
      if (witness.id === id) {
        return { ...witness, [field]: value };
      }
      return witness;
    });
    setWitnesses(updatedWitnesses);
  };

  const handleWitnessStatementChange = (e) => {
    setWitnessStatement(e.target.value);
  };

  const renderWitnessInputs = () => {
    return witnesses.map((witness) => (
      <div key={witness.id}>
        <label>
          Name:
          <input
            type="text"
            value={witness.name}
            onChange={(e) => handleWitnessChange(witness.id, 'name', e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={witness.address}
            onChange={(e) => handleWitnessChange(witness.id, 'address', e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={witness.phoneNumber}
            onChange={(e) => handleWitnessChange(witness.id, 'phoneNumber', e.target.value)}
          />
        </label>
      </div>
    ));
  };

  const renderResponse = () => {
    if (witnesses.length === 0 && witnessStatement.trim() === '') {
      return "There are no known witnesses.";
    }

    if (witnessStatement.trim() !== '') {
      return witnessStatement;
    }

    return (
      <ul>
        {witnesses.map((witness) => (
          <li key={witness.id}>
            {witness.name}, {witness.address}, {witness.phoneNumber}
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
            <h3>12.1 State witnesses of, before, or after the incident, their address, and phone number (excepting expert witnesses):</h3>
            <div>
              <button type="button" onClick={addWitness}>
                Add Witness
              </button>
            </div>
            {renderWitnessInputs()}
            <div>
              <label>
                Any witness during, before, or after, who made any statement at the scene and who you or your attorney's claim have knowledge of the incident:
                <textarea value={witnessStatement} onChange={handleWitnessStatementChange} />
              </label>
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

export default Section12_1;
