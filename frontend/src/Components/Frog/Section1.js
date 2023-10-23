import React, { useState } from 'react';
import MainRow from './MainRow';
import MainCol from './MainCol';
import ChildRow from './ChildRow';
import ChildCol from './ChildCol';
import './grid.css'

function Section1() {
  const [plaintiff, setPlaintiff] = useState('');
  const [defendants, setDefendants] = useState(['']);

  const handleDefendantChange = (index, value) => {
    const newDefendants = [...defendants];
    newDefendants[index] = value;
    setDefendants(newDefendants);
    if (index === newDefendants.length - 1 && value) {
      setDefendants([...newDefendants, '']);
    }
  }

  const formattedDefendants = () => {
    const filledDefendants = defendants.filter(def => def.trim() !== '');
    switch (filledDefendants.length) {
      case 0: return '';
      case 1: return filledDefendants[0];
      case 2: return filledDefendants.join(' and ');
      default: return filledDefendants.slice(0, -1).join(', ') + ', and ' + filledDefendants.slice(-1);
    }
  };

  return (
    <>
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              <label>
                Plaintiff:
                <input 
                  type="text" 
                  value={plaintiff} 
                  onChange={(e) => setPlaintiff(e.target.value)}
                />
              </label>
            </ChildCol>
            <ChildCol>
              {plaintiff}
            </ChildCol>
          </ChildRow>
        </MainCol>
      </MainRow>
      
      <MainRow>
        <MainCol>
          <ChildRow>
            <ChildCol>
              {"Defendants:"}
            </ChildCol>
            <ChildCol>
              {formattedDefendants()}
            </ChildCol>
          </ChildRow>

          {defendants.map((defendant, index) => (
            <ChildRow key={index}>
              <ChildCol>
                <label>
                  Defendant {index + 1}:
                  <input 
                    type="text"
                    value={defendant}
                    onChange={(e) => handleDefendantChange(index, e.target.value)}
                  />
                </label>
              </ChildCol>
              <ChildCol>
                {defendant}
              </ChildCol>
            </ChildRow>
          ))}
        </MainCol>
      </MainRow>
    </>
  );
}


export default Section1;
