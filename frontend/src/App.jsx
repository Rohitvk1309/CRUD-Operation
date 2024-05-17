import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create';
import Read from './Read';
import Update from './Update';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/read/:id' element={<Read />} />
            <Route path='/edit/:id' element={<Update />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
