import React from 'react'
import "../../Fonts.css"
import "../../Home/components/FindUs.css"

function Persona1() {
  return (
    <div >
      <div className='fu-text'>
      <h1 className='fu-title'> Manuel Esteban Ruiz </h1>
      <a className='fu-street'> Especialista en derecho judicial</a>
      <a className='fu-build'> Mas de 5 años de experiencia</a>
      <a className='fu-office'> Manuel@gmail.com</a>
      <a className='fu-country'><em>Bogotá D.C. Colombia</em></a>
      </div>
      <div className='fu-map'>
        <div className='map'></div>
      </div>
    </div>
  )
}

export default Persona1