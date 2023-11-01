import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section17_1() {
  const [responses, setResponses] = useState([]);

  const addResponse = () => {
    const newResponse = {
      id: responses.length,
      requestNumber: '',
      facts: '',
      persons: '',
      documents: ''
    };
    setResponses([...responses, newResponse]);
  };

  const handleInputChange = (id, field, value) => {
    const updatedResponses = responses.map((response) => {
      if (response.id === id) {
        return { ...response, [field]: value };
      }
      return response;
    });
    setResponses(updatedResponses);
  };

  const renderResponseInputs = () => {
    return responses.map((response) => (
      <div key={response.id} style={{ marginBottom: '20px' }}>
        <div>
          <label>a) Request Number: </label>
          <input
            type="text"
            value={response.requestNumber}
            onChange={(e) => handleInputChange(response.id, 'requestNumber', e.target.value)}
          />
        </div>
        <div>
          <label>b) Facts: </label>
          <textarea
            value={response.facts}
            onChange={(e) => handleInputChange(response.id, 'facts', e.target.value)}
          />
        </div>
        <div>
          <label>c) Persons: </label>
          <textarea
            value={response.persons}
            onChange={(e) => handleInputChange(response.id, 'persons', e.target.value)}
          />
        </div>
        <div>
          <label>d) Documents: </label>
          <textarea
            value={response.documents}
            onChange={(e) => handleInputChange(response.id, 'documents', e.target.value)}
          />
        </div>
      </div>
    ));
  };

  const renderResponses = () => {
    return responses.map((response, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <div>a) {response.requestNumber}</div>
        <div>b) {response.facts}</div>
        <div>c) {response.persons}</div>
        <div>d) {response.documents}</div>
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <h3>17.1 Is your response to each request for admission served with these interrogatories an unqualified admission? If not, for each response that is not an unqualified admission:</h3>
            {renderResponseInputs()}
            <button type="button" onClick={addResponse}>
              Add Response
            </button>
          </ChildCol>
          <ChildCol>
            <h4>Response:</h4>
            <div>{renderResponses()}</div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section17_1;
