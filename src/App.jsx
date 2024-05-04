/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Crossline from './components/Crossline/Crossline'
import Electraton from './components/Electraton/Electraton'
import Escuderia from './components/Escuderia/Escuderia'
import Us from './components/Us/Us'

const App = () => {
  return (
    <div className='container'>
      <Crossline />      
      <Navbar />
      <Home />
      <Electraton />
      <Crossline />
      <Us/>
    </div>
  )
}

export default App