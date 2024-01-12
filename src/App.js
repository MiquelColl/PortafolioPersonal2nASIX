import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
