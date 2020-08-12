import React, { useState, useEffect } from 'react'
import { TextArea } from './TextArea';

export const TextScreen = () => {

    
    const FILOMENA = [
        {
            id: 0,
            type: "text",
            page: 0,
            text: "Me siento desconectada.",
            className: "grs-1 gre-2 gcs-1 gce-3 up",
            delay: 0, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Mis pies están en la cama,",
            className: "grs-1 gre-2 gcs-1 gce-3 down mb-0",
            delay: 0, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 2,
            type: "text",
            page: 0,
            text: "y debajo de ellos",
            className: "grs-2 gre-3 gcs-2 gce-4 up",
            delay: 0, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 7,
            type: "img",
            page: 0,
            text:"",
            className: "",
            delay: 0, //animate__delay-1s
            renderNext: true,
            //url: "/assets/img/rata.png",
            nextPage: false,
        },
        
        {   
            id: 4,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 0, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/whatAreTheRoots.mp3",
            nextPage: false,
        },
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "gcs-1 gce-7 grs-4 center",
            delay: 0, //animate__delay-1s
            renderNext: false,
            url: "",
            nextPage: true,
        },
    ];
    


    // Holds the number of the current rendered page
    const [currentPage, setCurrentPage] = useState(0); 

    // When the currentPage changes, sets the new textBlocks that are going to be rendered
    useEffect( () => {
        const nextBlocks = FILOMENA.filter( textBlock => textBlock.page === currentPage);
        setDataBlocksToRender(nextBlocks);
    }, [currentPage]);

    // Holds the textBlocks to be rendered
    const [dataBlocksToRender, setDataBlocksToRender] = useState([]);

    // Handles the setting of a newPage
    const handleNewPage = () => {
        // const nextBlocks = FILOMENA.filter( textBlock => textBlock.page === currentPage + 1);
        // setDataBlocksToRender(nextBlocks);
        setCurrentPage(currentPage + 1);    
    }
    //const background = process.env.PUBLIC_URL + 'assets/img/room-bg2.png'
    //className="img-fluid" style={{backgroundImage: "url(" + background + ")"}}
    return (
        <div>
            { dataBlocksToRender.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <TextArea 
                        dataBlocksToRender={dataBlocksToRender}
                        handleNewPage={handleNewPage}
                    />
                )
            }

        </div>
    )
}


/*
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
            nextPage: false,
        },
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Abril es el mes más cruel. Puros deseos y recuerdos de cosas que dábamos por sentado unas semanas atrás. La lluvia de otoño rebota contra las veredas y es el único movimiento que hay allá afuera.",
            className: "gcs-2 gce-4 grs-1 gre-2 center",
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
            className: "gcs-1 gce-2 grs-1 gre-4",
            // className: "img-left",
            delay: 4000, //animate__delay-1s
            renderNext: true,
            url: "/assets/img/rata.png",
            nextPage: false,
        },
        {
            id: 3,
            type: "text",
            page: 0,
            text: "Nos toca crecer en macetas de cemento, porque ya no se puede plantar los pies en la tierra.",
            className: "gcs-2 gce-4 grs-2 center",
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
            delay: 4000, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/whatAreTheRoots.mp3",
            nextPage: false,
        },
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"¿Qué clase de plantas pueden nacer de estas cajas rígidas, sin poros, sin respiración? Ya solo nos queda una pila de imágenes rotas que guardamos en nuestras casas, a las que les damos forma para pasar el tiempo.",
            className: "gcs-2 gce-4 grs-3 center",
            delay: 6000, //animate__delay-1s
            renderNext: false,
            url: "",
            nextPage: true,
        },
        {   
            id: 6,
            type: "audio",
            page: 1,
            text: "",
            className: "",
            delay: 4500, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/speakToMe.mp3",
            nextPage: false,
        },
        {
            id: 7,
            type: "text",
            page: 1,
            text: "Estás bestialmente quieto hoy.",
            className: "gcs-1 gce-4 grs-1 gre-2",
            delay: 2500, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 8,
            type: "text",
            page: 1,
            text:"Hablame.",
            className: "gcs-3 grs-1",
            delay: 2000, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 9,
            type: "audio",
            page: 1,
            text: "",
            className: "",
            delay: 500, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/whatAreYouThinking.mp3",
            nextPage: false,
        },
        {   
            id: 10,
            type: "text",
            page: 1,
            text:"¿Por qué no me hablás? ",
            className: "gcs-1 gce-3 grs-2",
            delay: 5000, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 11,
            type: "text",
            page: 1,
            text: "Nunca sé qué estás pensando. ¿Está vacía tu cabeza?",
            className: "gcs-1 gce-4 grs-3",
            delay: 3000, //animate__delay-1s
            renderNext: false,
            url: "",
            nextPage: false,
        },
         
    ]
*/