import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Pagina1 from './pages/landingPage/index.js'
import Pagina2 from './pages/menu/menu.js'
import Pagina3 from './pages/paginaADM/loginadm.js'
import Pagina4 from './pages/paginaCadastrar/cadastrar.js'
import Pagina5 from './pages/paginaConsulta/consultarinformacoes.js'
import Pagina6 from './pages/paginaConsulta/editar.js'
import Pagina7 from './pages/paginaProximasConsultas/edicao.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path = '/pagina-1' element ={<Pagina1/>}/>
        <Route path = '/pagina-2' element ={<Pagina2/>}/>
        <Route path = '/pagina-3' element ={<Pagina3/>}/>
        <Route path = '/pagina-4' element ={<Pagina4/>}/>
        <Route path = '/pagina-5' element ={<Pagina5/>}/>
        <Route path = '/pagina-6' element ={<Pagina6/>}/>
        <Route path = '/pagina-7' element ={<Pagina7/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

