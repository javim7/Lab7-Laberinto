import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Laberinto.css'

const Laberinto = ({ title }) => {

    let navigate = useNavigate();
    let { size } = useParams();
    const tamano = size[0]

    const [laberinto, setLaberinto] = useState([]);
    let jugador = document.querySelector('.jugador');
    let movimiento = 50;

    useEffect(() => {
        fetch(`https://maze.juanelcaballo.club/?type=json&w=${tamano}&h=${tamano}`)
            .then((response) => {
                return response.json()
            }).then(response2 => {
                // console.log(response2)
                setLaberinto(response2)
            })
    }, [])

    useEffect(() => {
        window.addEventListener("load", () => {
            jugador.style.position = "absolute";
            jugador.style.left = 0;
            jugador.style.top = 0;
        })
    }, [])

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    console.log('izquierda')
                    jugador.style.left = parseInt(jugador.style.left) - movimiento + 'px';
                    break;
                case 'ArrowRight':
                    jugador.style.left = parseInt(jugador.style.left) + movimiento + 'px';
                    break;
                case 'ArrowUp':
                    jugador.style.top = parseInt(jugador.style.top) - movimiento + 'px';
                    break;
                case 'ArrowDown':
                    jugador.style.top = parseInt(jugador.style.top) + movimiento + 'px';
                    break;
            }
        })
    }, [jugador])

    return (
        <div className="Laberinto">
            {laberinto.map(fila => {
                return (
                    <div className="gridFila">
                        {
                            fila.map(caracter => {
                                if (caracter == '-') {
                                    return <div key={Math.random()} className="pared"></div>
                                }
                                else if (caracter == '|') {
                                    return <div key={Math.random()} className="pared"></div>
                                }
                                else if (caracter == '+') {
                                    return <div key={Math.random()} className="pared"></div>
                                }
                                else if (caracter == ' ') {
                                    return <div key={Math.random()} className="piso"></div>
                                }
                                else if (caracter == 'p') {
                                    return <div key={Math.random()} className="jugador"></div>
                                }
                                else if (caracter == 'g') {
                                    return <div key={Math.random()} className="fin"></div>
                                }
                            })
                        }
                    </div>
                )

            })}
        </div>
    )
}

export default Laberinto