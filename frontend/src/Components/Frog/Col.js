import React from 'react';
import './Col.css';

function Col({ children, type }) {
    return (
        <div className={`col ${type}`}>
            {children}
        </div>
    );
}

export default Col;
