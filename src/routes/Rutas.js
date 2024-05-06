import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '../layout/Layout';
//import de componentes
import Home from '../pages/Home';
import Lista from '../components/Lista';
import Login from "../components/Login";
import DatosPersonales from '../components/DatosPersonales';
import Tabla from '../components/Tabla';



export default function Rutas() {
let role="";
  let isAuth=role==="admin";
  return (
    <Layout>
   
      {
         <Routes>
        isAuth ? (
          <Route path='/' exact element={<Login/>}/>
        ):(
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/lista' exact element={<Lista/>}/>
          <Route path='/datos' exact element={<DatosPersonales/>}/>
          <Route path='/tabla' exact element={<Tabla/>}/>
        )
        </Routes>
}
       
    
    </Layout>
  )
}
