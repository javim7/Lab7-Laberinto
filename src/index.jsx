import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Laberinto from './components/Laberinto/Laberinto.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import AudioPlayer from 'react-h5-audio-player'
import music from './music.mp3'
// import Sound from 'react-sound'
import './index.css'

const App = () => {

    return (
        <div className='index'>
            <AudioPlayer
                autoplay={true}
                loop
                src={music}

            />
            <Router>
                <div className='container'>
                    <Routes>
                        <Route path='/20067/' element={<Inicio />} />
                        <Route path='/20067/laberinto/:size' element={<Laberinto />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

// const root = ReactDOMClient.createRoot(
//     document.getElementById('root'),
// );

// root.render(
//     <App />
// )

ReactDOM.render(<App />, document.getElementById('root'))