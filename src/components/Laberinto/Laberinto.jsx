import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Laberinto.css'

const Laberinto = ({ title }) => {

    let navigate = useNavigate();
    let { size } = useParams();

    const [laberinto, setLaberinto] = useState([]);
    const [tamano, setTamano] = useState(0);
    const [jugadorPos, setjugadorPos] = useState();
    const [jugadorPosX, setjugadorPosX] = useState(0);
    const [jugadorPosY, setjugadorPosY] = useState(0);

    let movimientoHor = 30;
    let movimientoVer = 40;

    const style = {
        left: `${jugadorPosX}`,
        top: `${jugadorPosY}`
    }

    useEffect(() => {
        setTamano(size[0]);
    }, [])

    useEffect(() => {
        fetch(`https://maze.juanelcaballo.club/?type=json&w=${tamano}&h=${tamano}`)
            .then((response) => {
                return response.json()
            }).then(response2 => {
                // console.log(response2)
                setLaberinto(response2)
            })
    }, [tamano])

    useEffect(() => {

        const lab2 = laberinto
        for (let i = 0; i < lab2.length; i++) {

            for (let j = 0; j < lab2[i].length; j++) {

                console.log(lab2[i][j]);
            }
        }

    }, [])

    useEffect(() => {

    })


    return (
        <div className="Laberinto">
            <h1 className="titulo">LABERINTO</h1>
            <h2 className="tamLab">{size}</h2>
            <div className="board">
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
                                        return <div style={style} key={Math.random()} onKeyDown={handleKeyDown} tabIndex='0' className="jugador"></div>
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
        </div>
    )
}

export default Laberinto