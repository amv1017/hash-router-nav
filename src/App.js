import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Banner from './pages/Banner'

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </Router>
  )
}

export default App
