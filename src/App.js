import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lista from "./components/Lista";
import DatosPersonales from "./components/DatosPersonales";
import React from 'react';
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
//import Lista from './components/Lista'; // Asegúrate de importar Lista si aún no lo has hecho
//import DatosPersonales from './components/DatosPersonales'; // Asegúrate de importar DatosPersonales si aún no lo has hecho

import { Login } from './components/Admin/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Tabla from "./components/Tabla";
import './app.css';
import Layout from "./layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Asegúrate de envolver el componente Lista con el componente Layout */}
        <Route path='/home' exact element={<Home/>}/>
          <Route path='/lista' exact element={<Layout><Lista/></Layout>}/>
          <Route path='/datos' exact element={<Layout><DatosPersonales/></Layout>}/>
          <Route path='/tabla' exact element={<Layout><Tabla/></Layout>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
