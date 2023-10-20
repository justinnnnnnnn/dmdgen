import React, { useState } from 'react';
import Row from './Row';
import Col from './Col';

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
        <Row type="main">
          <Col type="sub">
            <Row type="sub">
              <label>
                Plaintiff:
                <input 
                  type="text" 
                  value={plaintiff} 
                  onChange={(e) => setPlaintiff(e.target.value)}
                />
              </label>
            </Row>
          </Col>
          <Col type="sub">
            <Row type="sub">
              {plaintiff}
            </Row>
            <Row type="sub">
              {plaintiff.toUpperCase()}
            </Row>
            <Row type="sub">
              {plaintiff.toUpperCase()}
            </Row>
          </Col>
        </Row>
  
        <Row type="main">
          <Col type="sub">
            <Row type="sub">
              {"Defendants:"}
            </Row>
            {defendants.map((defendant, index) => (
              <Row type="sub" key={index}>
                <label>
                  Defendant {index + 1}:
                  <input 
                    type="text"
                    value={defendant}
                    onChange={(e) => handleDefendantChange(index, e.target.value)}
                  />
                </label>
              </Row>
            ))}
          </Col>
          <Col type="sub">
            <Row type="sub">
              {formattedDefendants()}
            </Row>
            {defendants.map((defendant, index) => (
              <Row type="sub" key={index}>
                {defendant}
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
  
  export default Section1;
