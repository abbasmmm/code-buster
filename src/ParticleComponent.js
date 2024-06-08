
import React from 'react';
import Particles from 'react-tsparticles';

const ParticleComponent = () => {
  const particleOptions = {
    // Configure tsparticles options here
    // Example options:
    background: {
      color: {
        value: "#000000",
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
      },
      move: {
        enable: true,
      },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* TSParticles component */}
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
      
      {/* Text to display over the particles */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>
        Hello, World!
      </div>
    </div>
  );
};

export default ParticleComponent;