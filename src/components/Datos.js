import React from "react";

function Datos(props) {
  //console.log(props);
  const { nombre, telefono, direccion, imagenes } = props;

  const Mensaje=()=>{
    alert('Bienvenido')
  }
  return (
    <>
      
        <div class="col">
          <div class="card h-50">
            <img src={imagenes} 
            class="card-img-top" alt="..." 
            width={10}
            height={180}
            />
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">
               Telefono: {telefono}
              </p>
              <p class="card-text">
              direccion:{direccion}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"><button type="button"
               class="btn btn-info"
               onClick={Mensaje}
               >
                
                Camara...</button></small>
                <small class="text-body-secondary"><button type="button"
               class="btn btn-info"
               onClick={Mensaje}
               >
                Galeria...</button></small>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Datos;
