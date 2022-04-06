import React from 'react'
import './Inicio.css'

const Inicio = () => {
    return (
        <div className="inicio">
            <div className="texto">
                <h1 id="titulo">Lab7: Laberinto</h1>
                <h2 id="nombre">Javier Mombiela</h2>
                <h1 id="elegir">Elige el tamano del laberinto</h1>
            </div>
            <div className="gridOpciones">
                <div id="opcion">
                    <h1 id="opcionTxt">4x4</h1>
                    <div id="opcionCuadro"></div>
                </div>
                <div id="opcion">
                    <h1 id="opcionTxt">5x5</h1>
                    <div id="opcionCuadro"></div>
                </div>
                <div id="opcion">
                    <h1 id="opcionTxt">6x6</h1>
                    <div id="opcionCuadro"></div>
                </div>
                <div id="opcion">
                    <h1 id="opcionTxt">7x7</h1>
                    <div id="opcionCuadro"></div>
                </div>
            </div>
        </div>
    )
}

export default Inicio