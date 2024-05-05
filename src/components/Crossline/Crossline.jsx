import React from 'react'
import logo from '../../assets/header_spray.png';
import './Crossline.css'

const Crossline = () => {
  return (
    <div className='crossline-container'>
       <img src={logo} alt=''  className='logo'/>
    <div className="linea"></div> {/* Línea divisoria */}
    </div>
  )
}

export default Crossline