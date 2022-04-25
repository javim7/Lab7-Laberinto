import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Laberinto.css'

const Laberinto = ({ title }) => {

    let navigate = useNavigate();
    let { size } = useParams();

    const [laberinto, setLaberinto] = useState([]);
    const [tamano, setTamano] = useState(0);
    const [jugadorPos, setJugadorPos] = useState([1, 1]);
    const [tecla, setTecla] = useState('');
    const [movidas, setMovidas] = useState(0);

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


        const lab2 = [];

        for (let i = 0; i < laberinto.length; i++) {
            lab2.push([...laberinto[i]])
        }

        for (let i = 0; i < lab2.length; i++) {

            for (let j = 0; j < lab2[i].length; j++) {
                if (lab2[i][j] == "p") {
                    // console.log(lab2[i][j]);
                    // console.log("Y", lab2.indexOf(lab2[i]))
                    // console.log("X", lab2.indexOf(lab2[j]))
                }
            }
        }

    }, [laberinto])

    useEffect(() => {

        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    // console.log("izquierda")
                    setTecla("ArrowLeft");
                    setMovidas(prev => prev + 1)
                    break;
                case "ArrowRight":
                    setTecla("ArrowRight");
                    setMovidas(prev => prev + 1)
                    break;
                case "ArrowDown":
                    setTecla("ArrowDown");
                    setMovidas(prev => prev + 1)
                    break;
                case "ArrowUp":
                    setTecla("ArrowUp");
                    setMovidas(prev => prev + 1)
                    break;
            }
        })

    }, [tamano])

    useEffect(() => {

        if (movidas > 0) {

            let movimiento = jugadorPos;
            let distancia = 1;
            // console.log(movidas)
            // console.log(tecla)

            switch (tecla) {
                case "ArrowLeft":
                    // console.log("izquierda")
                    movimiento = [jugadorPos[0], jugadorPos[1] - distancia]
                    // console.log(movimiento)
                    break;
                case "ArrowRight":
                    movimiento = [jugadorPos[0], jugadorPos[1] + distancia]
                    break;
                case "ArrowDown":
                    movimiento = [jugadorPos[0] + distancia, jugadorPos[1]]
                    break;
                case "ArrowUp":
                    movimiento = [jugadorPos[0] - distancia, jugadorPos[1]]
                    break;
            }

            const lab2 = [];
            let sePuede = false;

            if (laberinto[movimiento[0]][movimiento[1]] == ' ') {
                sePuede = true;
            }

            // console.log(sePuede)
            for (let i = 0; i < laberinto.length; i++) {
                lab2.push([...laberinto[i]])
            }

            if (sePuede) {

                lab2[movimiento[0]][movimiento[1]] = 'p'
                lab2[jugadorPos[0]][jugadorPos[1]] = ' '

                setJugadorPos([movimiento[0], movimiento[1]])
                setLaberinto(lab2)
            }

        }

    }, [movidas])

    return (
        <div className="Laberinto">
            <h1 className="titulo">LABERINTO</h1>
            <h2 className="tamLab">{size}</h2>
            <div className="board">
                {laberinto.map(fila => {
                    return (
                        <div className="gridFila" key={Math.random()}>
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
        </div>
    )
}

export default Laberinto