import React,{useEffect} from 'react'
import './Us.css'
import kanye from '../../assets/kanye.webp'
import pedro from '../../assets/fotos/Pedro.jpeg'
import daniel from '../../assets/fotos/Daniel Sánchez.jpeg'
import diana from '../../assets/fotos/Diana Palmer.jpeg'
import max from '../../assets/fotos/Max.jpeg'
import yeray from '../../assets/fotos/Yeray Silveira.jpeg'

const Us = () => {
  
const photos = [
  {
    id : 1,
    photo: pedro,
    charge : 'capitan',
    name : 'Pedro Borges'
  },
  {
    id : 2,
    photo : daniel,
    charge : 'capitan',
    name : 'Daniel Sanchez'
  },
  {
    id : 3,
    photo : diana,
    charge : 'capitan',
    name : 'Diana Palmer'
  },
  {
    id : 4,
    photo : max,
    charge : 'capitan',
    name : 'Maximiliano'
  },
  {
    id : 5,
    photo : yeray,
    charge : 'capitan',
    name : 'Yeray Silvera'
  },
  {
    id : 6,
    photo : kanye,
    charge : 'capitan',
    name : 'Kanye West'
  }]

const PhotoUs = (props) =>{
  return(<li>
    <div className='person-container'>
      <img src={props.photo} className='image'/>
      <p>{props.charge}</p>
      <p>{props.name}</p>
      <div className='middle'>
        <div className='text'>Algo</div>
      </div>
      </div>
    </li>)
}

  return (
    <div className='us-container'>
    <ul>
      {photos.map(photo => <PhotoUs key={photo.id} {...photo}/>)}
    </ul>
    </div>
  )
}

export default Us;
