import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect9_2({ damages }) {
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({ description: '', persons: '', addresses: '', phoneNumbers: '' });

  const addDocument = () => {
    if (newDocument.description.trim() || newDocument.persons.trim() || newDocument.addresses.trim() || newDocument.phoneNumbers.trim()) {
      setDocuments([...documents, newDocument]);
      setNewDocument({ description: '', persons: '', addresses: '', phoneNumbers: '' });
    }
  };

  const handleChange = (e, field) => {
    setNewDocument({ ...newDocument, [field]: e.target.value });
  };

  const renderResponse = () => {
    if (!damages) {
      return 'Not Applicable.';
    }

    if (documents.length === 0) {
      return '';
    }

    return documents.map((doc, index) => (
      <div key={index}>
        {doc.description.trim()}, {doc.persons.trim()}, at {doc.addresses.trim()}, {doc.phoneNumbers.trim()}.
      </div>
    ));
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            9.2 Do any DOCUMENTS support the existence or amount of any item of damages claimed in interrogatory 9.1? If so, describe each document and state the name, ADDRESS, and telephone number of the PERSON who has each DOCUMENT.
            {damages && (
              <>
                <div>
                  <label>
                    Document Description:
                    <input
                      type="text"
                      value={newDocument.description}
                      onChange={(e) => handleChange(e, 'description')}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Persons:
                    <input
                      type="text"
                      value={newDocument.persons}
                      onChange={(e) => handleChange(e, 'persons')}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Addresses:
                    <input
                      type="text"
                      value={newDocument.addresses}
                      onChange={(e) => handleChange(e, 'addresses')}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Phone Numbers:
                    <input
                      type="text"
                      value={newDocument.phoneNumbers}
                      onChange={(e) => handleChange(e, 'phoneNumbers')}
                    />
                  </label>
                </div>
                <button type="button" onClick={addDocument}>
                  Add Document
                </button>
              </>
            )}
          </ChildCol>
          <ChildCol>
            Response to Request No. 9.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect9_2;
