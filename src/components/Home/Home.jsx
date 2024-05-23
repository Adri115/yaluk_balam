import React from 'react'
import './Home.css'
import homeLogo from '../../assets/home-logo.jpg'
import electraton from '../../assets/Electraton.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-text'> 
        <ul>
            <li><img src={electraton} /></li>
            <li><h2>MÉXICO</h2></li>
            <li><h3>2024</h3></li>
            <li><button className='home-btn'>¡CONÓCENOS!</button></li>
            <li><h1>YALUK BALAM</h1></li>
        </ul>
        </div>
        <div className='home-logo'>
        <img src={homeLogo} />
        </div>
    </div>
  )
}

export default Home