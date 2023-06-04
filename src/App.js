import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Ajouter from './pages/Ajouter';
import Liste from './pages/listeUte';
import Notification from './pages/notificaation';
import Articles from './pages/articles';
import { LoginForm } from 'react-admin';
import Log from './pages/log';
import Dashboard from './components/Sidebare/dashbord';
const App = () => {
  return (
    
    <BrowserRouter>
   
        <Routes>
 
        <Route path="/" exact  element={<Log/>} />
        
        
        </Routes>
    
    </BrowserRouter>
   
  );
};

export default App;