import React from 'react';
import '../../App.css';    // make sure to import the css file where you will put the animation

function ReactIcon() {
  return (
    <div className="react-logo-container" style={{ 
      backgroundColor: 'black',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10%'
    }}>
      <img 
        className="react-logo"
        src={`${process.env.PUBLIC_URL}/SVG/react.svg`} 
        alt="React" 
        style={{width: '55px', height: '55px'}} 
      />
    </div>
  );
}

export default ReactIcon;
