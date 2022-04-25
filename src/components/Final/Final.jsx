import React from 'react'
import './Final.css'
import { useNavigate, useParams } from 'react-router-dom';

const Final = ({ cerrarModal }) => {

    let navigate = useNavigate();

    return (
        <div className='Final'>
            <h1 className='ganar'>Felicidades! Has Ganado!</h1>
            <button className='btnG' onClick={() => { navigate('/') }}>Nuevo Juego</button>
        </div>
    )
}

export default Final