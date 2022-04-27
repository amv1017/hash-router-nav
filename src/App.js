import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home, { routes } from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        { routes.map(r => <Route exact path={r.path} element={r.element} />) }
      </Routes>
    </Router>
  )
}

export default App
