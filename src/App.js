import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./components/Lista";
import DatosPersonales from "./components/DatosPersonales";
import { Login } from './components/Admin/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Tabla from "./components/Tabla";
import Layout from "./layout/Layout";
import Inicio from "./components/inicio";
import CameraApp from './components/Lista'; // Import CameraApp component
import Gallery from './components/Gallery'; // Import Gallery component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/lista' exact element={<Layout><Lista/></Layout>}/>
        <Route path='/datos' exact element={<Layout><DatosPersonales/></Layout>}/>
        <Route path='/tabla' exact element={<Layout><Tabla/></Layout>}/>
        <Route path='/inicio' exact element={<Layout><Inicio/></Layout>}/>
        <Route path='/camera' exact element={<Layout><CameraApp/></Layout>}/> {/* Add route for CameraApp */}
        <Route path='/gallery' exact element={<Layout><Gallery/></Layout>}/> {/* Add route for Gallery */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
