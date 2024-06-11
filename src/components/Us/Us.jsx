import React from 'react';
import './Us.css';
import pedro2 from '../../assets/fotos/PEDRO2.JPG';
import uknown2 from '../../assets/fotos/Uknown2.JPG';
import diana from '../../assets/fotos/Diana Palmer.jpeg';
import max from '../../assets/fotos/Max.JPG';
import yeray from '../../assets/fotos/Yeray Silveira.JPG';
import uknown from '../../assets/fotos/Uknown.JPG';
import uknown3 from '../../assets/fotos/Uknown3.JPG';

const PhotoUs = (props) => {
  return (
    <li>
      <div className='person-container'>
        <img src={props.photo} className='image' alt={props.name} />
        <p>{props.charge}</p>
        <p>{props.name}</p>
        <div className='middle'>
          <div className='text'>
            <a href={props.linkedinUrl} target='_blank' rel='noopener noreferrer'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO2WvQ4BQRSFvxU6P4VG5wU0KioqiQ3eQu81VJ7DA+h0RFTeQLUrohSFiLArktlkTGOLmVk/e5JT3HPvzZfMTDGQ6h/VA3ZAqMk+4MYB+xqhkb044NCQ30pdOAJL4GwTfAKqIq8DN1vgtdLzbIEvQEPkAyCwecd3YJ/E4xoLT0R9kLIZsAVGQB8YAitdYEfkeVFvpNkmUFL2M8DcNDhSmVd1TIMdYCHyqZRXTINr0twVyIo8ZxrcUmYLUi8wCW4rs8UUzDcedajJnwv2k/r6uJrhT2g3DjjVb+kBRsV7Hz5Qag0AAAAASUVORK5CYII=" alt="LinkedIn"/>
              <h4> LinkedIn </h4>
            </a>
          </div>
        </div>
        <div className='reference'>LinkedIn icon by <a href='https://icons8.com' target='_blank' rel='noopener noreferrer'>Icons8</a></div>
      </div>
    </li>
  );
}

const Us = () => {
  const photos = [
    {
      id: 1,
      photo: pedro2,
      charge: 'capitan',
      name: 'Pedro Borges',
      linkedinUrl: 'https://www.google.com'
    },
    {
      id: 2,
      photo: uknown2,
      charge: 'capitan',
      name: 'Daniel Sanchez',
      linkedinUrl: 'https://www.google.com'
    },
    {
      id: 3,
      photo: uknown3,
      charge: 'capitan',
      name: 'Diana Palmer',
      linkedinUrl: 'https://www.google.com'
    },
    {
      id: 4,
      photo: max,
      charge: 'capitan',
      name: 'Maximiliano',
      linkedinUrl: 'https://www.google.com'
    },
    {
      id: 5,
      photo: yeray,
      charge: 'capitan',
      name: 'Yeray Silvera',
      linkedinUrl: 'https://www.google.com'
    },
    {
      id: 6,
      photo: uknown,
      charge: 'capitan',
      name: 'Kanye West',
      linkedinUrl: 'https://www.google.com'
    }
  ];

  return (
    <div className='us-container'>
      <ul>
        {photos.map(photo => <PhotoUs key={photo.id} {...photo} />)}
      </ul>
    </div>
  );
}

export default Us;
