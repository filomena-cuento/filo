import React, { useState, useEffect } from 'react'
import { TextArea } from './TextArea';

const LAST_PAGE = 4;

export const TextScreen = () => {

   

    const FILOMENA = [];


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
        <div id='padre-centrar-aca'>
            { dataBlocksToRender.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <TextArea 
                        dataBlocksToRender={dataBlocksToRender}
                        isLastPage={currentPage === LAST_PAGE}
                        handleNewPage={handleNewPage}
                    />
                )
            }

        </div>
    )
}


 /*
    const FILOMENA = [
        {   
            id: 0,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 0, 
            renderNext: true,
            url: "/assets/sounds/whatAreYouThinking.mp3",
            nextPage: false,
        },
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Estás bestialmente quieto. Hablame.",
            className: "grs-1 gre-2 gcs-3 gce-7 center",
            delay: 7500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 2,
            type: "text",
            page: 0,
            text: "¿Por qué no me hablás?",
            className: "grs-1 gre-2 gcs-3 gce-7 down",
            delay: 4000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
       
        
        {
            id: 3,
            type: "text",
            page: 0,
            text: "Nunca sé qué estás pensando y a veces pienso que no pensás en nada.",
            className: "grs-2 gre-3 gcs-3 gce-7 up",
            delay: 4000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        
        {
            id: 4,
            type: "text",
            page: 0,
            text: "¿Seguís vivo, acaso? ¿Sigo viva?",
            className: "grs-2 gre-3 gcs-3 gce-7 center",
            delay: 4000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
       
    
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"¿Qué vamos a hacer ahora?",
            className: "grs-2 gre-3 gcs-3 gce-7 down mb-0",
            delay: 3000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        
        {   
            id: 6,
            type: "text",
            page: 0,
            text:"Me paro frente a la ventana. Busco la mirada de alguien, cualquiera. Ojos que me den cuerpo. Pero la gente ya no sale de sus cajas.",
            className: "grs-3 gre-4 gcs-3 gce-7 center",
            delay: 3000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 7,
            type: "text",
            page: 0,
            text:"Quiero correr por la calle. Antes no sospechaba que alguna vez iba a tener este deseo intenso de solo correr por la calle, de sentir las baldosas bajo mis pies.",
            className: "grs-4 gre-5 gcs-3 gce-7 center",
            delay: 6500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 8,
            type: "text",
            page: 0,
            text:"A la noche veo ratas rondando las veredas vacías. No hay nadie para reclamar esos espacios.",   
            className: "grs-5 gre-6 gcs-3 gce-7 up",
            delay: 6000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 9,
            type: "img",
            page: 0,
            text: "",
            className: "grs-1 gre-7 gcs-1 gce-3 center",
            height: 500,
            delay: 1500, 
            renderNext: true,
            url: "/assets/img/rata.png",
            nextPage: false,
        },
    
        {   
            id: 10,
            type: "text",
            page: 0,
            text:"Ellas andan embriagadas con esa nueva libertad.",   
            className: "grs-5 gre-6 gcs-3 gce-7 center",
            delay: 3000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 11,
            type: "text",
            page: 0,
            text:"Ya tomaron la ciudad, y no opusimos resistencia. Las miramos desde el otro lado del vidrio.",
            className: "grs-6 gre-7 gcs-3 gce-7 up",
            delay: 5000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 12,
            type: "text",
            page: 0,
            text:"Miles de ojos observando todo desde sus ventanas, testigos de una época en la cual ya no hay protagonistas.",
            className: "grs-6 gre-7 gcs-3 gce-7 down ",
            delay: 5000, 
            renderNext: false,
            url: "",
            nextPage: true,
        },
    ];
*/