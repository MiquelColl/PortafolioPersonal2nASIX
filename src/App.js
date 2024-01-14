import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './routes/LandingPage.jsx';
import Main from './components/Main.jsx';
import Newsletter from './routes/Newsletter.jsx';
import Contacto from './routes/Contacto.jsx';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
          <Route index element={<Main/>}/>
          <Route path='newsletter' element={<Newsletter/>}/>
          <Route path='contacto' element={<Contacto/>}/>
        </Route>
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
