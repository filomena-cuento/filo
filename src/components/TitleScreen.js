import React from 'react'
import { Link } from 'react-router-dom'
import roomBg from '../assets/img/room-bg2.png' 

export const TitleScreen = () => {

   // animate__animated animate__fadeIn animate__delay-3s
    return (
        <div>
            <div className="img-container" >
                <img src={roomBg} className="img-fluid" alt="Fondo"></img>
                <div className="title-text">  
                    <p className="mb-0 animate__animated animate__fadeIn">FILOMENA</p>
                </div>
                <Link exact to="/filomena">
                    <div className="start-text d-flex align-items-center animate__animated animate__fadeIn animate__delay-1s">
                        <p className="m-0 pb-1">
                            Empezá tu lectura
                        </p>
                        <i className="fa fa-play-circle ml-2" aria-hidden="true"></i>       
                    </div>
                </Link>
            </div>        
        </div>
    )
}




// const [ screen, setScreen ] = useState({
//     loadingScreen: true,
//     titleScreen: false,
//     interactiveTextScreen: false,
//     creditsScreen: false,
//     fullTextScreen: false,
//   });

//   // Easy access to screen variables
//   const { 
//     loadingScreen, 
//     titleScreen, 
//     interactiveTextScreen, 
//     creditsScreen, 
//     fullTextScreen 
//   } = screen;