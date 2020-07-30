import React, { useState, useEffect } from 'react'
import rainBg from '../assets/sounds/rain-loop.ogg';
import { TextArea } from './TextArea';


export const TextScreen = () => {

    const FILOMENA =
    [
        {
            id: 0,
            type: "audio",
            page: 0,
            className: "",
            delay: 0, 
            renderNext: true,
            url: "/assets/sounds/aprilIsTheCruelest.mp3",
            /*url: "../assets/sounds/1-1-april.mp3",*/
            nextPage: false,
        },
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Abril es el mes más cruel, mezcla recuerdos y deseos, remueve las raíces entumecidas con su lluvia otoñal.",
            className: "one",
            delay: 3500, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 2,
            type: "img",
            page: 0,
            text:"",
            className: "img-left",
            delay: 4000, //animate__delay-1s
            renderNext: true,
            url: "/assets/img/planta.png",
            nextPage: false,
        },
        {
            id: 3,
            type: "text",
            page: 0,
            text: "Nos toca crecer en macetas de cemento, porque ya no se puede plantar los pies en la tierra.",
            className: "two",
            delay: 1500, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 4,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 4500, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/whatAreTheRoots.mp3",
            nextPage: false,
        },
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "three",
            delay: 6000, //animate__delay-1s
            renderNext: false,
            url: "",
            nextPage: true,
        },
        {
            id: 6,
            type: "text",
            page: 1,
            text: "Nos toca crecer en macetas de cemento, porque ya no se puede plantar los pies en la tierra.",
            className: "two",
            delay: 1500, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 7,
            type: "audio",
            page: 1,
            text: "",
            className: "",
            delay: 4500, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/whatAreTheRoots.mp3",
            nextPage: false,
        },
        {   
            id: 8,
            type: "text",
            page: 1,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "three",
            delay: 6000, //animate__delay-1s
            renderNext: false,
            url: "",
            nextPage: false,
        },
        
         
    ]

    // Holds the textBlocks to be rendered
    const [dataBlocksToRender, setDataBlocksToRender] = useState([]);

    // Holds the number of the current rendered page
    const [currentPage, setCurrentPage] = useState(0); 

    // When the currentPage changes, sets the new textBlocks that are going to be rendered
    useEffect( () => {
        const unrenderedDataBlocks = FILOMENA.filter( textBlock => textBlock.page === currentPage);
        setDataBlocksToRender(unrenderedDataBlocks);
    }, [currentPage]);
    

    // Handles the setting of a newPage
    const handleNewPage = () => {
        setCurrentPage(currentPage + 1);    
    }
    

    return (
        <div>
            {/* <audio autoPlay loop>
                <source src={rainBg} type="audio/mpeg" />
            </audio> */}

            { dataBlocksToRender.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <TextArea 
                        dataBlocksToRender={dataBlocksToRender}
                        currentPage={currentPage}
                        handleNewPage={handleNewPage}
                    />
                )
            }

        </div>
    )
}