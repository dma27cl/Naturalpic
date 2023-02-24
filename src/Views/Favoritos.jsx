import React from 'react'
import Galeria from '../Components/Galeria.jsx'

const Favoritos = () => {
  return (
    <div>
      <h1 className='titles'>Mis fotos favoritas</h1><Galeria fav={true}></Galeria></div>
  )
}

export default Favoritos