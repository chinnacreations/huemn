import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Navbar';
import Services from './Components/Services'

import Component from './Components/Component'
import BottomFooter from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Component/>} />
    <Route path='/services' element={<Services/>} />
    </Routes>
    <BottomFooter />
   </Router>
  )
}

export default App