import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Laberinto from './components/Laberinto/Laberinto.jsx'
import './styles.css'

const App = () => {
    return (
        <>
            <Laberinto title="Hello from React!" />
        </>
    )
}

const root = ReactDOMClient.createRoot(
    document.getElementById('root'),
);

root.render(
    <App />
)