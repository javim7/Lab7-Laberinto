import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Laberinto.css'
import Final from '../Final/Final'
import character from './character.svg'

function Laberinto() {
  const { size } = useParams()

  const [laberinto, setLaberinto] = useState([])
  const [tamano, setTamano] = useState(0)
  const [jugadorPos, setJugadorPos] = useState([1, 1])
  const [tecla, setTecla] = useState('')
  const [movidas, setMovidas] = useState(0)
  const [modalFinal, setmodalFinal] = useState(false)

  useEffect(() => {
    setTamano(size[0])
  }, [])

  useEffect(() => {
    fetch(`https://maze.juanelcaballo.club/?type=json&w=${tamano}&h=${tamano}`)
      .then((response) => response.json()).then((response2) => {
        // console.log(response2)
        setLaberinto(response2)
      })
  }, [tamano])

  useEffect(() => {
    const lab2 = []

    for (let i = 0; i < laberinto.length; i += 1) {
      lab2.push([...laberinto[i]])
    }

    for (let i = 0; i < lab2.length; i += 1) {
      for (let j = 0; j < lab2[i].length; j += 1) {
        if (lab2[i][j] === 'p') {
          // console.log(lab2[i][j])
        }
      }
    }
  }, [laberinto])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft':
          setTecla('ArrowLeft')
          setMovidas((prev) => prev + 1)
          break
        case 'd':
        case 'ArrowRight':
          setTecla('ArrowRight')
          setMovidas((prev) => prev + 1)
          break
        case 's':
        case 'ArrowDown':
          setTecla('ArrowDown')
          setMovidas((prev) => prev + 1)
          break
        case 'w':
        case 'ArrowUp':
          setTecla('ArrowUp')
          setMovidas((prev) => prev + 1)
          break
        default:
      }
    })
  }, [tamano])

  useEffect(() => {
    if (movidas > 0) {
      let movimiento = jugadorPos
      const distancia = 1

      switch (tecla) {
        case 'ArrowLeft':
          // console.log('izquierda')
          movimiento = [jugadorPos[0], jugadorPos[1] - distancia]
          // console.log(movimiento)
          break
        case 'ArrowRight':
          movimiento = [jugadorPos[0], jugadorPos[1] + distancia]
          break
        case 'ArrowDown':
          movimiento = [jugadorPos[0] + distancia, jugadorPos[1]]
          break
        case 'ArrowUp':
          movimiento = [jugadorPos[0] - distancia, jugadorPos[1]]
          break
        default:
      }
      const lab2 = []
      let sePuede = false
      if (laberinto[movimiento[0]][movimiento[1]] === ' ') {
        sePuede = true
      }

      if (laberinto[movimiento[0]][movimiento[1]] === 'g') {
        sePuede = true
        setTimeout(() => {
          setmodalFinal(true)
        }, 500)
      }

      if (modalFinal) {
        sePuede = false
      }

      // console.log(sePuede)
      for (let i = 0; i < laberinto.length; i += 1) {
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
        {laberinto.map((fila) => (
          <div className="gridFila" key={Math.random()}>
            {
                fila.map((caracter) => {
                  if (caracter === '-') {
                    return <div key={Math.random()} className="pared" />
                  } if (caracter === '|') {
                    return <div key={Math.random()} className="pared" />
                  } if (caracter === '+') {
                    return <div key={Math.random()} className="pared" />
                  } if (caracter === ' ') {
                    return <div key={Math.random()} className="piso" />
                  } if (caracter === 'p') {
                    return (
                      <div key={Math.random()} className="jugador">
                        <img alt="caracter" src={character} className="jugador" />
                      </div>
                    )
                  }
                  return <div key={Math.random()} className="fin" />
                })
              }
          </div>
        ))}
      </div>
      {modalFinal && <Final cerrarModal={setmodalFinal} />}
    </div>
  )
}

export default Laberinto
