import React,{useEffect} from 'react'
import './Us.css'
import kanye from '../../assets/kanye.webp'

const Us = () => {
  
const photos = [
  {
    id : 1,
    photo: kanye,
    charge : 'capitan' 
  },
  {
    id : 2,
    photo : kanye,
    charge : 'capitan'
  },
  {
    id : 3,
    photo : kanye,
    charge : 'capitan'
  },
  {
    id : 4,
    photo : kanye,
    charge : 'capitan'
  },
  {
    id : 5,
    photo : kanye,
    charge : 'capitan'
  },
  {
    id : 6,
    photo : kanye,
    charge : 'capitan'
  }]

const PhotoUs = ({photo,charge}) =>{
  return(<li>
    <img src={photo}/>
    <p>{charge}</p>
    </li>)
}

  return (
    <div className='us-container'>
    <ul>
      {photos.map(photo => <PhotoUs key={photo.id} photo={photo.photo} charge={photo.charge}/>)}
    </ul>
    </div>
  )
}

export default Us