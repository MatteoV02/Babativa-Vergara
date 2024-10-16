import React from 'react'

import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'

import Header from './components/Header/Header'
import Services from './components/Servicess/Services'
import DerLaboral from './components/Servicess/components/descServices/DerLaboral'
import DerTributario from './components/Servicess/components/descServices/DerTributario'
import AsesJuridicas from './components/Servicess/components/descServices/AsesJuridicas'
import AdminCobro from './components/Servicess/components/descServices/AdminCobro'
import PrevResolucion from './components/Servicess/components/descServices/PrevResolucion'
import Superinten from './components/Servicess/components/descServices/Superinten'
import DerechoAdmin from './components/Servicess/components/descServices/DerechoAdmin'


function App() {
  return (
    <div>
      <header> <Header/> </header>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Services" element={<Services/>} />

        {/*Servicios*/}
        <Route path="/servicios/DerLaboral" element={<DerLaboral/>}/>
        <Route path="DerTributario" element={<DerTributario/>}/>
        <Route path="AsesJuridicas" element={<AsesJuridicas/>}/>
        <Route path="AdminCobro" element={<AdminCobro/>}/>
        <Route path="PrevResolucion" element={<PrevResolucion/>}/>
        <Route path="Superintenl" element={<Superinten/>}/>
        <Route path="DerechoAdmin" element={<DerechoAdmin/>}/>
    </Routes>
    </div>
  )
}

export default App