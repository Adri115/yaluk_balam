import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , PerspectiveCamera} from '@react-three/drei'
import Car from '../../../public/Car'

import './Model.css'

const Model = () => {

  return (
    <div className='model-container'>
      
      <div className='model-text'>
        <h1>Nuestra <br className='br-text'/>escudería</h1>
        <p> En Yaluk Balam buscamos diseñar y
            construir un vehículo ganador para esta
            competencia, aprovechando nuestros
            conocimientos teóricos y prácticos
            adquiridos hasta el momento. 
            Somos una escudería privada que
            representa a sus integrantes y patrocinadores.
        </p>
      </div>
      <div className='model-3d'>
        <Canvas camera={{position:[-2,0.5,2.5],fov:45}}>
            <Suspense fallback={null}>              
              <OrbitControls />              
              <ambientLight intensity={0.8} />
              <Car position={[-0.5,0,0]}/>
            </Suspense>
        </Canvas>
      
      </div>
    </div>
  )
}

export default Model