import React from 'react'


const AcercaDe = () => {
  return (
    <div>
      <h2>Página de acerca de...</h2>
      <p>Esta es la pagina acerca de Intecap</p>
      <div className="card" style={{ width: "12rem" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Desarrollador</h5>
          <h4 className="card-title">Cristian Pérez</h4>
          <p className="card-text">
            - Programador ReactJS
          </p>
          <p className="card-text">
            - Mantenimiento a aplicaciones móviles desarrolladas en sitio.
          </p>
          <p className="card-text">
            - Mantenimiento y administración de servidor CleaOS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe