import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section14_1() {
  const [contention, setContention] = useState("");

  const handleContentionChange = (e) => {
    setContention(e.target.value);
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <h3>14.1 Do you or anyone on your behalf contend that any person involved in the incident violated any statute, ordinance, or regulation and that the violation was a legal (proximate) cause of the incident?</h3>
            <div>
              <label>
                Contentions:
                <textarea value={contention} onChange={handleContentionChange} />
              </label>
            </div>
          </ChildCol>
          <ChildCol>
            <h4>Response:</h4>
            <p>{contention}</p>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section14_1;
