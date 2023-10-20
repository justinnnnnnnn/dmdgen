import React, { useState } from 'react';

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
      <div className="section1">
          <div className="row">
              <div className="col-left">
                  <label>
                      Plaintiff:
                      <input 
                          type="text" 
                          value={plaintiff} 
                          onChange={(e) => setPlaintiff(e.target.value)}
                      />
                  </label>
              </div>
              <div className="col-right">
                  {plaintiff}
              </div>
          </div>
          <div className="row">
              <div className="col-left"></div>
              <div className="col-right">{plaintiff.toUpperCase()}</div>
          </div>
          <div className="row">
              <div className="col-left"></div>
              <div className="col-right">{plaintiff.toUpperCase()}</div>
          </div>
          <div className="row">
              <div className="col-left">Defendants:</div>
              <div className="col-right">{formattedDefendants()}</div>
          </div>
          {defendants.map((defendant, index) => (
              <div className="row" key={index}>
                  <div className="col-left">
                      <label>
                          Defendant {index + 1}:
                          <input 
                              type="text"
                              value={defendant}
                              onChange={(e) => handleDefendantChange(index, e.target.value)}
                          />
                      </label>
                  </div>
                  <div className="col-right">{defendant}</div>
              </div>
          ))}
      </div>
  );
  
}

export default Section1;
