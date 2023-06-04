import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Ajouter from './pages/Ajouter';
import Liste from './pages/listeUte';
import Notification from './pages/notificaation';
import Articles from './pages/articles';
import { LoginForm } from 'react-admin';
import Log from './pages/log';
import { App, Modal } from 'antd';
import Ajoutervid from './pages/videos';
import Ajouterliv from './pages/livres';
import Editearticles from './pages/editeart';
import Listeliv from './pages/liistlivres';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import InfoModal from './pages/Modal';
import Profile from './pages/editeart';

const Appe = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>
 
         <Route path="/" exact  element={<Log/>} />
          <Route path="/articles" exact  element={<Articles />} />
        
          <Route path="/utilesateur" element={<Liste />} />
          <Route path="/notification" element={<InfoModal />} />
          <Route path='/profile/:id/edit' element={<Profile/>} />
          <Route path="/ajouter" element={<Ajouter />} />
          <Route path="/videos" element={<Ajoutervid />} />
          <Route path="/boock" element={<Ajouterliv />} />
          <Route path="/ediite" element={<Ajouterliv />} />
          <Route path="/editearticles" element={<Editearticles />} />
          <Route path="/listliv" element={<Listeliv/>} />
          <Route path='/livres' element={<Listeliv/>} />


        </Routes>
        
    </BrowserRouter>
   
  );
};

export default Appe;