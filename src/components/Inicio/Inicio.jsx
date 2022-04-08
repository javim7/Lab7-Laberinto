import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image4 from './laber4.png'
import image5 from './laber5.png'
import image6 from './laber6.png'
import image7 from './laber7.png'
import './Inicio.css'

const Inicio = () => {

    let navigate = useNavigate();

    const [opciones, setOpciones] = useState({
        objects: [{ id: 0, size: 4, src: image4 }, { id: 1, size: 5, src: image5 }, { id: 2, size: 6, src: image6 }, { id: 3, size: 7, src: image7 }]
    });
    const [tamanoLab, setTamanoLab] = useState(0);

    const handleClick = (sizeLab) => {
        console.log(sizeLab);
        setTamanoLab(sizeLab);
        console.log(tamanoLab);
        navigate(`/laberinto/${tamanoLab}x${tamanoLab}`)
    }



    return (
        <div className="inicio">
            <div className="texto">
                <h1 id="titulo">Lab7: Laberinto</h1>
                <h2 id="nombre">Javier Mombiela</h2>
                <h1 id="elegir">Elige el tamano del laberinto</h1>
            </div>
            <div className="gridOpciones">
                {opciones.objects.map((objects, index) => {
                    return (
                        <div key={opciones.objects[index].id}>
                            {/* {console.log(opciones.objects[index].src)} */}
                            <h1>{opciones.objects[index].size}x{opciones.objects[index].size}</h1>
                            <img onClick={() => { navigate(`/laberinto/${opciones.objects[index].size}x${opciones.objects[index].size}`) }} src={opciones.objects[index].src} id="opcionCuadro" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inicio