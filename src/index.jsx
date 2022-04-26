import React, { useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Laberinto from './components/Laberinto/Laberinto.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import AudioPlayer from 'react-h5-audio-player'
import music from "./music.mp3"
// import Sound from 'react-sound'
import './index.css'

const audioClip = [
    { sound: music, label: "music" }
]

const App = () => {

    return (
        <div className="index">
            <AudioPlayer
                autoplay={true}
                loop
                src={music}
                showSkipControls={false}
                showJumpControls={false}

            />
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path='/laberinto/:size' element={<Laberinto />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

const root = ReactDOMClient.createRoot(
    document.getElementById('root'),
);

root.render(
    <App />
)