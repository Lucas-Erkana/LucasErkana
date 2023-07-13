import React from 'react';

function VscodeIcon() {
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
        src={`${process.env.PUBLIC_URL}/SVG/vscode.svg`} 
        alt="Vscode" 
        style={{width: '33px', height: '33px'}} 
      />
    </div>
  );
}

export default VscodeIcon;
