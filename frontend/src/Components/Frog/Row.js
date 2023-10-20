import React from 'react';
import './Row.css';

function Row({ type = "sub", children }) {
  return (
    <div className={`row-${type}`}>
      {children}
    </div>
  );
}

export default Row;
