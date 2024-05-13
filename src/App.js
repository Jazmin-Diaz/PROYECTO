import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./components/Lista";
import DatosPersonales from "./components/DatosPersonales";
import { Login } from './components/Admin/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Tabla from "./components/Tabla";
import './app.css';
import Layout from "./layout/Layout";
import PhotoGallery from "./components/gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/lista' exact element={<Layout><Lista/></Layout>}/>
        <Route path='/datos' exact element={<Layout><DatosPersonales/></Layout>}/>
        <Route path='/tabla' exact element={<Layout><Tabla/></Layout>}/>

        {/* Ruta para la galería de fotos */}
        <Route path='/gallery' element={<Layout><PhotoGallery /></Layout>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
