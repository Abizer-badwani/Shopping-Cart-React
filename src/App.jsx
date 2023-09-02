import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (      
    <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/cart' exact element={ <Cart /> } />
    </Routes>
  )
}

export default App