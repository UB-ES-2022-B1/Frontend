import './App.css';
import { useState } from 'react';
import Home from './routes/main/Home.js'
import About from './routes/about/About.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
