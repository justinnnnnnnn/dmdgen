import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Sect4_2() {
  const [statute, setStatute] = useState('');
  const [isSelfInsured, setIsSelfInsured] = useState(false);

  const handleStatuteChange = (e) => {
    setStatute(e.target.value);
    if (e.target.value.trim() !== '') {
      setIsSelfInsured(true);
    } else {
      setIsSelfInsured(false);
    }
  };

  const renderResponse = () => {
    if (!isSelfInsured) {
      return "Plaintiff is not self-insured under any statute for the incident to the best of their knowledge.";
    }

    return `Plaintiff is self-insured under the statute: ${statute}.`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            4.2 Are you self-insured under any statute for the incident?
            {isSelfInsured && (
              <div>
                <br />
                <label>
                  Statute:
                  <input
                    type="text"
                    value={statute}
                    onChange={handleStatuteChange}
                  />
                </label>
              </div>
            )}
            <br />
            <button type="button" onClick={() => setIsSelfInsured(!isSelfInsured)}>
              {isSelfInsured ? 'Clear' : 'I am Self-Insured'}
            </button>
          </ChildCol>
          <ChildCol>
            Response to Request No. 4.2:
            <div>
              {renderResponse()}
            </div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Sect4_2;
