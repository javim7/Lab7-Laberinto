import React from 'react'
import './Final.css'
import { useNavigate } from 'react-router-dom'

function Final() {
  const navigate = useNavigate()

  return (
    <div className="Final">
      <h1 className="ganar">Felicidades! Has Ganado!</h1>
      <button type="submit" className="btnG" onClick={() => { navigate('/') }}>Nuevo Juego</button>
    </div>
  )
}

export default Final
