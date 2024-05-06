import React from 'react'
import {Link} from "react-router-dom"
export default function BarraMenu() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    

      <a class="navbar-brand" href="#">Pantalla principal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Busqueda<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-house" viewBox="0 0 16 16">
                </svg></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/lista">Galeria</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Formularios
            </a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to='/datos'>Datos Personales</Link></li>
              <li><Link class="dropdown-item" to="/">Lista personal</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" to="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
