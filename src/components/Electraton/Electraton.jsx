import React from 'react'
import './Electraton.css'
import electraton from '../../assets/electraton-race.png'

const Electraton = () => {
  return (
    <div className='electraton-container' >
      <img src={electraton} />
      <ul className='electraton-text'>
        <li><h1>SOBRE <br/>ELECTRATÓN</h1></li>
        <li><p>El Electratón México es una competencia de automovilismo eléctrico, donde se realiza la planeación,
           diseño, construcción y conducción del vehículo por parte de estudiantes, aficionados y profesionales.
            Nace en 1995 y se mantiene hasta la fecha como un evento que busca promover el desarrollo de nuevas
             tecnologías en los autos eléctricos.</p></li>
             <li><a href='https://www.electraton.com/' target='_blank'><button className='electraton-btn'>IR A ELECTRATÓN.COM</button></a></li>
      </ul>
    </div>
  )
}

export default Electraton