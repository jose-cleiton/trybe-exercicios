import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




function tick() {
  const element = (
    <div>
      <h1>Oi, Agora são:</h1>
      <h2>{new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
