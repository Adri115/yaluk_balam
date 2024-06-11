import React from 'react'
import './Promote.css'
import flyer from '../../assets/Flyer-P.png'
import gold_logo from '../../assets/partner-glogo.png'
import plata_logo from '../../assets/partner-plogo.png'
import bronce_logo from '../../assets/partner-blogo.png'

const Sponsor = (props) =>{
  
  return(
    <li>
    <div className='sponsor-container'>
      <img src={props.logo} alt="Sponsor level"/>
      <div className='block-container'>
        <h2>{props.level}</h2>
      </div>
      <div className='sponsor-text'>
        <p>{props.details}</p>
      </div>
    </div>
    </li>
  );
}

const Promote = () => {

  const partners = [
    {
      id : 1,
      logo : bronce_logo,
      level : "BRONCE",
      details : "Nivel básico de patrocinio Ideal para pequeñas empresas y patrocinadores persona física"
    },
    {
      id : 2,
      logo : plata_logo,
      level : "PLATA",
      details : "Nivel intermedio de patrocinio Ideal para empresas locales y nacionales"
    },
    {
      id : 3,
      logo : gold_logo,
      level : "ORO",
      details : "Nivel más alto de patrocinio sólo 10 lugares disponibles Ideal para grandes empresas"
    }
  ]

  return (
    <div className='promotes-container'>
      <div className='promote-text'>
      <h1>¿Quieres patrocinarnos?</h1>
      <p className='p-tag'>Toda la ayuda es bien recibida y así como nuestros
          patrocinadores nos apoyan, nosotros los apoyamos a
          ellos según nuestro esquema de patrocinios.</p>
      <div className='promote-level'>
        <ul>
          {partners.map(partner => <Sponsor key={partner.id} {...partner}/>)}
        </ul>
      </div>
      </div>
      <div className='promote-flyer'>
        <img src={flyer} />
      </div>
    </div>
  )
}

export default Promote