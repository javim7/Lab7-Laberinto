import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player'
import Laberinto from './components/Laberinto/Laberinto'
import Inicio from './components/Inicio/Inicio'
import music from './music.mp3'
import './index.css'

function App() {
  return (
    <div className="index">
      <AudioPlayer
        autoplay
        loop
        src={music}
      />
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/laberinto/:size" element={<Laberinto />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
