import React, { useState } from 'react'
//import rainBg from '../assets/sounds/lluvia_fondo.mp3';
import rainBg from '../assets/sounds/waterfall-loop.ogg';
import { TextBlock } from './TextBlock';


export const InteractiveTextScreen = () => {
    
    const FILOMENA =
    [
        {
            id: 0,
            text: "Abril es el mes más cruel, mezcla recuerdos y deseos, remueve las raíces entumecidas con su lluvia otoñal. ",
            className: "animate__animated animate__fadeIn",
            delay: 0, //animate__delay-1s
            continueRendering: false,
            imgPath: "",
            soundPath: "../assets/sounds/ceramic-break.ogg"
        },
        {
            id: 1,
            text: "Nos toca crecer en macetas de cemento, porque ya no se puede plantar los pies en la tierra. ",
            className: "animate__animated animate__fadeIn",
            delay: 0, //animate__delay-1s
            continueRendering: false,
            imgPath: "",
            soundPath: "../assets/sounds/glass-break.mp3",
            nextPage: true,
        },
        {   
            id: 2,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "animate__animated animate__fadeIn",
            delay: 0, //animate__delay-1s
            continueRendering: false,
            imgPath: "",
            soundPath: "",
        }  
    ]
    
    // Holds the textBlocks to be rendered
    const [renderedText, setRenderedText] = useState([FILOMENA[0]]);

    // Sets next textBlock on renderedText for it to be rendered when user presses 'next'
    const handleNextTextBlock = () => {
        setRenderedText();

    }



    return (
        <div>
            <audio /*autoPlay*/ loop>
                <source src={rainBg} type="audio/mpeg" />
            </audio>
            <div className="container">
                <div className="row d">
                    <div className="textarea col-12">
                        <div>
                            {
                                renderedText.map( (textBlock) => {
                                    console.log(textBlock);
                                    return (                                       
                                        <TextBlock key={ textBlock.id } props={textBlock}/>
                                    )
                                })
                            }
                        </div>
                        <div className="next-text d-flex align-items-center" onClick={handleNextTextBlock}>                             
                            <p className="m-0 pb-1">
                                Siguiente
                            </p>
                            <i className="fa fa-play-circle ml-2" aria-hidden="true"></i>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
