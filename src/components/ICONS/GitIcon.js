import React from 'react';

function GitIcon() {
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
        src={`${process.env.PUBLIC_URL}/SVG/git.svg`} 
        alt="Git" 
        style={{width: '43px', height: '43px'}} 
      />
    </div>
  );
}

export default GitIcon;
