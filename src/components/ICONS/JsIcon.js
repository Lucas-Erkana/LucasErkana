import React from 'react';

function JsIcon() {
  return (
    <div style={{ 
      backgroundColor: 'yellow',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10%'
    }}>
      <img 
        src={`${process.env.PUBLIC_URL}/SVG/javascript`} 
        alt="React" 
        style={{width: '35px', height: '35px'}} 
      />
    </div>
  );
}

export default JsIcon;
