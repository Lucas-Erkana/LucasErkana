import React from 'react';

function RenderIcon() {
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
        src={`${process.env.PUBLIC_URL}/SVG/render.svg`} 
        alt="Render" 
        style={{
          width: '30px', 
          height: '30px', 
          filter: 'invert(59%) sepia(90%) saturate(568%) hue-rotate(106deg) brightness(91%) contrast(91%)'
        }} 
      />
    </div>
  );
}

export default RenderIcon;
