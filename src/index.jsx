import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Laberinto from './components/Laberinto/Laberinto.jsx'
import Controlador from './components/Controlador/Controlador.jsx'
import './index.css'

const App = () => {
    return (
        <>
            <h1>Lab7: Laberinto</h1>
            <h2>Javier Mombiela</h2>
            <Controlador />
            <Laberinto />
        </>
    )
}

const root = ReactDOMClient.createRoot(
    document.getElementById('root'),
);

root.render(
    <App />
)