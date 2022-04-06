import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Laberinto from './components/Laberinto/Laberinto.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import './index.css'

const App = () => {
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