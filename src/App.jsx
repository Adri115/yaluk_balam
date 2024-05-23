/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Crossline from './components/Crossline/Crossline'
import Electraton from './components/Electraton/Electraton'
import Us from './components/Us/Us'
import Contact from './components/Contact/Contact'
import Partners from './components/Partners/Partners'
import Model from './components/Model/Model'



const App = () => {
  
  return (
    <div className='container'>
      <Crossline />      
      <Navbar />
      <Home />
      <Electraton />
      <Us />
      <Crossline />
      <Model />
      <Crossline />
      <Partners />
      <Crossline />
      <Contact />
    </div>
  )
}

export default App