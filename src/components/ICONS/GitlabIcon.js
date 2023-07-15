import React from 'react';

function GitlabIcon() {
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
        src={`${process.env.PUBLIC_URL}/SVG/gitlab.svg`} 
        alt="Gitlab" 
        style={{width: '33px', height: '33px'}} 
      />
    </div>
  );
}

export default GitlabIcon;
