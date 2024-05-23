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
        <h1>Somos nosotros</h1>
        <p>Parrafo que representa el equipo</p>
      </div>
      <div className='model-3d'>
        <Canvas camera={{position:[-2,0.5,2.5],fov:45}}>
            <Suspense fallback={null}>              
              <OrbitControls />              
              <ambientLight intensity={0.5} />
              <Car position={[-0.5,0,0]}/>
            </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Model