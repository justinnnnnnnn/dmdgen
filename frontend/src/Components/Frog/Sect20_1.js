import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';

function Section20_1() {
  const [date, setDate] = useState('');
  const [time,setTime] = useState('');
  const [location,setLocation] = useState('');

  const renderResponse = () => {
    return `The INCIDENT occurred on ${date}, ${time} at ${location}`;
  };

  return (
    <MainRow>
      <MainCol>
        <ChildRow>
          <ChildCol>
            <h3>20.1 State the date, time, and place of the INCIDENT (closest street, address or intersection):</h3>
            <div>
              <label>Date: </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label>Time: </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <label>Location: </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </ChildCol>
          <ChildCol>
            <h4>Response:</h4>
            <div>{renderResponse()}</div>
          </ChildCol>
        </ChildRow>
      </MainCol>
    </MainRow>
  );
}

export default Section20_1;
