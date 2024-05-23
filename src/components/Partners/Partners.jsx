import React from 'react'
import './Partners.css'
import logo01 from '../../assets/promo-01.png'
import logo02 from '../../assets/promo-02.png'
import logo03 from '../../assets/promo-03.png'

const Partners = () => {

  const promotors = [{
    id : 1,
    name : "algo",
    file : logo01
  },
  {
    id : 2,
    name : "algo",
    file : logo02
  },
  {
    id : 3,
    name : "algo",
    file : logo03
  }]

  const Promos = (props) =>{
    const file = props.file

  return(
    <li>
      <img src={file}/>
    </li>
  )
  }
  
  return (
    <div className='partners-containers'>
        <div className='partner-col1'>
            <h1>NUESTROS PATROCINADORES OFICIALES
                YALUK BALAM
            </h1>
        </div>
        <div className='partner-col2'>
            <ul>
            {promotors.map(promotor => <Promos key={promotor.id} {...promotor}/>)}
            </ul>
        </div>
    </div>
  )
}

export default Partners