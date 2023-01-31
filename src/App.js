import './App.css';
import React from 'react';
import MainContent from './Components/Some';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Americano from './pages/americano/Americano'
import FutbolPremier from './pages/futbol/FutbolPremier'
import Futbol from './pages/futbol/Futbol'
import AmericanoNacional from './pages/americanoLigas/AmericanoNacional'
import FutbolLigas from './pages/futbolLigas/FutbolLigas';
import AmericanoLigas from './pages/americanoLigas/AmericanoLigas'


function App() {
  return (
    <div className="App">
      
      <Router>
                <Routes>
                    <Route path="/futbol" element={<Americano/>}/>
                    <Route path="/" element={<MainContent />}/>
                    <Route path="/futbol-premiere" element={<FutbolPremier/>}/>
                    <Route path="/americano" element={<Futbol/>}/>
                    <Route path="/americano-nacional" element={<AmericanoNacional/>}/>
                    <Route path="/futbol-ligas" element={<FutbolLigas />}/>
                    <Route path="/americano-ligas" element={<AmericanoLigas />}/>
                  
                   
                    
                </Routes>
            </Router>
    </div>
  );
}

export default App;
