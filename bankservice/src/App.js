import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Selfregister from './components/Selfregister';

function App() {
  return (
    <Router>
        <div className="App">
           <header className="App-header">
              <h1>Banking App</h1>
           </header>
           <Routes>
              <Route exact path="/register" element={<Selfregister />} />
           </Routes>
        </div>
     </Router>
  );
}

export default App;
