import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileAccessoryPage from './components2/MobileAccessoryPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/search' element={<MobileAccessoryPage/>} />
      </Routes>
    </Router>
  )
}

export default App
