import React, { useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Laberinto from './components/Laberinto/Laberinto.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import { Howl, Howler } from 'howler'
import music from "./music.mp3"
import './index.css'

const audioClip = [
    { sound: music, label: "music" }
]

const App = () => {

    const SoundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path='/laberinto/:size' element={<Laberinto />} />
                </Routes>
            </div>
        </Router>
    )
}

const root = ReactDOMClient.createRoot(
    document.getElementById('root'),
);

root.render(
    <App />
)