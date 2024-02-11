import React from 'react';

function TerminalIcon() {
  return (
    <div style={{ 
      backgroundColor: 'white',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    }}>
      <img 
        src={`${process.env.PUBLIC_URL}/SVG/terminal-fill.svg`} 
        alt="Terminal" 
        style={{width: '43px', height: '43px'}} 
      />
    </div>
  );
}

export default TerminalIcon;
