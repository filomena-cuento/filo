import React from 'react';
import './App.css';
import roomBg from './assets/img/room-bg2.png' 

export const App = () => {
  return (
    <div className="App">
      <div className="img-container">
        <img src={roomBg} className="img-fluid" alt="Fondo"></img>
        <div className="title-text">  
          <p className="mb-0 animate__animated animate__fadeIn">FILOMENA</p>
        </div>
          <div className="start-text">
            <p className="m-0 animate__animated animate__fadeIn animate__delay-5s">EMPEZÁ</p>
          </div>
      </div>     
    </div>
  );
}


