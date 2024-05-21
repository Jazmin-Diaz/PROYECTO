import React from 'react';
import proyectoImagen from './proyecto.png'; // Importa la imagen localmente

function FotWeb() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontStyle: 'italic' }}>FotWeb</h1>
        <img src={proyectoImagen} alt="FotWeb" style={{ width: '30%', maxWidth: '800px', height: 'auto' }} />
        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
          <p style={{ fontSize: '18px', color: 'white', fontStyle: 'italic' }}>Explora la belleza natural a través del objetivo. Cada fotografía captura la esencia y la grandeza de la naturaleza, transmitiendo su majestuosidad y serenidad.</p>
        </div>
      </div>
    </div>
  );
}

export default FotWeb;
