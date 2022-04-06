import React, { useEffect, useState } from 'react';
import './Laberinto.css'

const Laberinto = ({ title }) => {

    const [tamano, setTamano] = useState(4);
    const [laberinto, setLaberinto] = useState([]);

    useEffect(() => {
        fetch(`https://maze.juanelcaballo.club/?type=json&w=${tamano}&h=${tamano}`)
            .then((response) => {
                return response.json()
            }).then(response2 => {
                console.log(response2)
                setLaberinto(response2)
            })
    }, [])

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