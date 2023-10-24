import React, {useState} from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section4 from './Section4'
import Section from './Section';

const FrogContext = React.createContext();

function Frog() {
    const [plaintiff, setPlaintiff] = useState('');

    return (
        <FrogContext.Provider value={{ plaintiff, setPlaintiff }}>
            <div className="frog-container">
                <Section>
                    <Section1 />
                    <Section2 />
                    <Section4 />
                </Section>
            </div>
        </FrogContext.Provider>
    );
}

export { Frog, FrogContext };
