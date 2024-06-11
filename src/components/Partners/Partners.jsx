import React from 'react'
import './Partners.css'
import meriland from '../../assets/promo-01.png'
import box from '../../assets/promo-02.png'
import innovar from '../../assets/promo-03.png'
import stringele from '../../assets/promo-04.jpeg'
import riga from '../../assets/promo-05.png'
import s from '../../assets/icons-linkedin.png'

const Partners = () => {

  const promotors = [{
    id : 1,
    name : "meriland",
    file : meriland
  },
  {
    id : 2,
    name : "box",
    file : box
  },
  {
    id : 3,
    name : "innovar",
    file : innovar
  }]
  
  return (
    <div className='partners-containers'>
        <div className='partner-col1'>
            <h1>NUESTROS PATROCINADORES OFICIALES <br />
                YALUK BALAM
            </h1>
        </div>
        <div className='partner-col2'>
            <ul>
            <li>
              <figure className='shake'>
                <img src={innovar}/>
                </figure>
             </li>
             <li>
              <figure className='shake'>
                <img src={stringele}/>
                </figure>
             </li>
             <li>
              <figure className='shake'>
                <img src={box}/>
                </figure>
             </li>
             <li>
              <figure className='shake'>
                <img src={meriland}/>
                </figure>
             </li>
             <li>
              <figure className='shake'>
                <img src={riga}/>
                </figure>
             </li>
         
            </ul>
        </div>
    </div>
  )
}

export default Partners