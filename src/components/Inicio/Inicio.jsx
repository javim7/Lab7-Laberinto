import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image4 from './laber4.png'
import image5 from './laber5.png'
import image6 from './laber6.png'
import image7 from './laber7.png'
import './Inicio.css'

function Inicio() {
  const navigate = useNavigate()

  const [opciones] = useState({
    objects: [
      { id: 0, size: 4, src: image4 },
      { id: 1, size: 5, src: image5 },
      { id: 2, size: 6, src: image6 },
      { id: 3, size: 7, src: image7 },
    ],
  })

  return (
    <div className="inicio">
      <div className="texto">
        <h1 id="titulo">Lab7: Laberinto</h1>
        <h2 id="nombre">Javier Mombiela</h2>
        <h1 id="elegir">Elige el tamano del laberinto</h1>
      </div>
      <div className="gridOpciones">
        {opciones.objects.map((objects, index) => (
          <div key={opciones.objects[index].id}>
            {/* {console.log(opciones.objects[index].src)} */}
            <h1>
              {opciones.objects[index].size}
              x
              {opciones.objects[index].size}
            </h1>
            <button className="botonOp" type="submit" onClick={() => { navigate(`/laberinto/${opciones.objects[index].size}x${opciones.objects[index].size}`) }}>
              <img alt="opciones" src={opciones.objects[index].src} id="opcionCuadro" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inicio
