import React, { useState, useEffect } from 'react'
import { TextArea } from './TextArea';

export const TextScreen = () => {

    
    const FILOMENA = [
        {   
            id: 121,
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
            id: 0,
            type: "text",
            page: 0,
            text: "Me siento desconectada.",
            className: "grs-1 gre-2 gcs-1 gce-3 up",
            delay: 200, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Mis pies están en la cama, y debajo de ellos",
            className: "grs-1 gre-2 gcs-1 gce-3 center mb-0",
            delay: 1500, //animate__delay-1s
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 3,
            type: "text",
            page: 0,
            text: "mi corazón.",
            className: "grs-1 gre-2 gcs-2 gce-4 down center-hori",
            delay: 1400, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 4,
            type: "img",
            page: 0,
            text: "",
            className: "gcs-5 gce-7 grs-1 gre-4",
            height: 200,
            delay: 0, 
            renderNext: true,
            url: "/assets/img/espejo2.png",
            nextPage: false,
        },
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"Mi",
            className: "gcs-1 gce-3 grs-2 center",
            delay: 2000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 6,
            type: "text",
            page: 0,
            text:"cabeza ",
            className: "gcs-1 gce-3 grs-2 center rueda-cabeza",
            delay: 500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 7,
            type: "text",
            page: 0,
            text: " r ",
            className: "gcs-1 gce-3 grs-2 center left rueda-r",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 8,
            type: "text",
            page: 0,
            text: " u ",
            className: "gcs-1 gce-3 grs-2 center left rueda-u",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 9,
            type: "text",
            page: 0,
            text: " e ",
            className: "gcs-1 gce-3 grs-2 center left rueda-e",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 10,
            type: "text",
            page: 0,
            text: " d ",
            className: "gcs-1 gce-3 grs-2 center left rueda-d",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 11,
            type: "text",
            page: 0,
            text: " a ",
            className: "gcs-1 gce-3 grs-2 center left rueda-a",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 12,
            type: "text",
            page: 0,
            text: "debajo del sillón ",
            className: "gcs-2 gce-3 grs-2 down rueda-cabeza",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 13,
            type: "text",
            page: 0,
            text: "y encuentra la carta que perdí hace meses.",
            className: "gcs-3 gce-5 grs-2 center left",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 14,
            type: "text",
            page: 0,
            text: "Me prometiste que hoy iba a ser un día nuevo, pero no sé si lo dijiste ayer o la semana pasada. ",
            className: "gcs-1 gce-7 grs-3 up left",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {
            id: 15,
            type: "img",
            page: 0,
            text: "",
            className: "gcs-1 gce-4 grs-4 gre-7",
            height: 200,
            delay: 0, 
            renderNext: true,
            url: "/assets/img/sillon.png",
            nextPage: false,
        },
        {   
            id: 16,
            type: "text",
            page: 0,
            text: "No puedo conectar ",
            className: "gcs-1 gce-7 grs-3 down left",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 17,
            type: "text",
            page: 0,
            text: "nada",
            className: "gcs-2 gce-3 grs-3 down center-hori ",
            delay: 500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "con",
            className: "gcs-3 gce-4 grs-3 down center-hori ",
            delay: 500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 19,
            type: "text",
            page: 0,
            text: "nada.",
            className: "gcs-4 gce-5 grs-3 down center-hori ",
            delay: 500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 20,
            type: "text",
            page: 0,
            text: "La idea fija de una casa en llamas y no tener dónde escapar me inunda la cabeza. ",
            className: "gcs-4 gce-7 grs-4 up right",
            delay: 500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 21,
            type: "text",
            page: 0,
            text: "La casa se quema, se quema, se quema, pero nadie se mueve. ",
            className: "gcs-4 gce-7 grs-4 down left",
            delay: 0, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 22,
            type: "text",
            page: 0,
            text: "La gente de los balcones observa, y el humo  ",
            className: "gcs-4 gce-7 grs-6 center left",
            delay: 300, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 23,
            type: "text",
            page: 0,
            text: "sube",
            className: "gcs-5 gce-7 grs-6 up center-hori",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 24,
            type: "text",
            page: 0,
            text: "hasta",
            className: "gcs-6 gce-7 grs-5 down center-hori",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 25,
            type: "text",
            page: 0,
            text: "el cielo.",
            className: "gcs-6 gce-7 grs-5 up right",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        
        {   
            id: 172,
            type: "text",
            page: 0,
            text:"",
            className: "",
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