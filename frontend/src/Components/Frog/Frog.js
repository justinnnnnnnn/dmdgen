import React, {useState} from 'react';
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Section4 from './Section4'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Section11 from './Section11'
import Section12 from './Section12'
import Section14 from './Section14'
import Section17 from './Section17'
import Section20 from './Section20'

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
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Section9 />
                    <Section10 />
                    <Section11 />
                    <Section12 />
                    <Section14 />
                    <Section17 />
                    <Section20 />
                </Section>
            </div>
        </FrogContext.Provider>
    );
}

export { Frog, FrogContext };
