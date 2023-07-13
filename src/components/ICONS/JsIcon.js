import React from 'react';

function JsIcon() {
  return (
      <img 
        src={`${process.env.PUBLIC_URL}/SVG/javascript.svg`} 
        alt="React" 
        style={{width: '50px', height: '50px', borderRadius: '10%'}} 
      />
  );
}

export default JsIcon;
