import React from 'react';
import './Frog.css';
import Section1 from './Section1';
import Section from './Section';

function Frog() {
    return (
        <div className="frog-container">
            <Section>
                <Section1 />
                {/* Future sections will be placed here */}
            </Section>
        </div>
    );
}

export default Frog;
