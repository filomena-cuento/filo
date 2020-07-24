import React, { useState, useEffect } from 'react'
//import rainBg from '../assets/sounds/lluvia_fondo.mp3';
import rainBg from '../assets/sounds/waterfall-loop.ogg';
import { TextArea } from './TextArea';


export const TextScreen = () => {

    const FILOMENA =
    [
        {
            id: 0,
            page: 0,
            text: "Abril es el mes más cruel, mezcla recuerdos y deseos, remueve las raíces entumecidas con su lluvia otoñal.",
            className: "animate__animated animate__fadeIn",
            delay: 800, //animate__delay-1s
            renderNext: false,
            imgUrl: "",
            soundUrl: "../assets/sounds/1-1-april.mp3",
            nextPage: false,
        },
        {
            id: 1,
            page: 0,
            text: "Nos toca crecer en macetas de cemento, porque ya no se puede plantar los pies en la tierra.",
            className: "animate__animated animate__fadeIn",
            delay: 800, //animate__delay-1s
            renderNext: false,
            imgUrl: "",
            soundUrl: "../assets/sounds/glass-break.mp3",
            nextPage: false,
        },
        {   
            id: 2,
            page: 0,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "animate__animated animate__fadeIn",
            delay: 800, //animate__delay-1s
            renderNext: false,
            imgUrl: "",
            soundUrl: "",
            nextPage: false,
        },
        {   
            id: 3,
            page: 1,
            text: "Paso ",
            className: "animate__animated animate__fadeIn",
            delay: 500, //animate__delay-1s
            renderNext: true,
            imgUrl: "",
            soundUrl: "",
            nextPage: false,
        },
        {   
            id: 4,
            page: 1,
            text: "a ",
            className: "animate__animated animate__fadeIn",
            delay: 500, //animate__delay-1s
            renderNext: true,
            imgUrl: "",
            soundUrl: "",
            nextPage: false,
        },
        {   
            id: 5,
            page: 1,
            text: "paso. ",
            className: "animate__animated animate__fadeIn",
            delay: 500, //animate__delay-1s
            renderNext: false,
            imgUrl: "",
            soundUrl: "",
            nextPage: false,
        },
        {   
            id: 6,
            page: 1,
            text: "Juliancito",
            className: "animate__animated animate__fadeIn",
            delay: 0, //animate__delay-1s
            renderNext: false,
            imgUrl: "",
            soundUrl: "",
            nextPage: false,
        }        
    ]


    // Holds the textBlocks to be rendered
    const [textBlocksToRender, setTextBlocksToRender] = useState([]);
    // Holds the id of the next element to be rendered
    const [nextToRenderId, setNextToRenderId] = useState(0);

    useEffect( () => {
        handleNextTextBlock();
    }, [])


    useEffect( () => {   
        
        if(nextToRenderId !== 0 && FILOMENA[nextToRenderId - 1].renderNext) {
            handleNextTextBlock(); 
        }
     
    }, [textBlocksToRender]);
    

    
    // Sets next textBlock on textBlocksToRender for it to be rendered when user presses 'next'
    const handleNextTextBlock = async () => {
        
        await sleep(FILOMENA[nextToRenderId].delay);
        setNextToRenderId(nextToRenderId + 1);
        setTextBlocksToRender([ 
            ...textBlocksToRender,
            FILOMENA[nextToRenderId]
        ]);

    }

    return (
        <div>
            <audio /*autoPlay*/ loop>
                <source src={rainBg} type="audio/mpeg" />
            </audio>

            <TextArea 
                textBlocksToRender={textBlocksToRender}
                handleNextTextBlock={handleNextTextBlock}
            />

        </div>
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

    // const asd = await setTimeout( () => {
        
        //     setRenderedText([ 
        //             ...textBlocksToRender,
        //             FILOMENA[nextElementId]
        //     ]);
 
        //     console.log(nextElementId);
        // }, FILOMENA[nextElementId].delay);
        
        // if (FILOMENA[nextElementId].continueRendering){
        //     handleNextTextBlock();
        // }

    