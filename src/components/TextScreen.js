import React, { useState, useEffect } from 'react'
import { TextArea } from './TextArea';

const LAST_PAGE = 4;

export const TextScreen = () => {

   

    const FILOMENA = [
        {   
            id: 121,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 100, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/key.mp3",
            nextPage: false,
        },
        {
            id: 0,
            type: "text",
            page: 0,
            text: "Desde que todo esto empezó, sueño con llaves. Las busco, pero nunca las encuentro ni en cajones ni en bolsillos ni en rincones.",
            className: "grs-1 gre-2 gcs-1 gce-7 center",
            delay: 7500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        
        {
            id: 1,
            type: "text",
            page: 0,
            text: "Te pregunto qué crees que significa soñar con llaves. Pensar en llaves suele confirmar jaulas, me explicó alguien alguna vez.",
            className: "grs-1 gre-2 gcs-1 gce-7 down",
            delay: 6000,
            renderNext: true,
            url: "",
            nextPage: false,
        },
               
       
        {   
            id: 5,
            type: "text",
            page: 0,
            text:"La carta que encontré es el Colgado. Me decís que es una carta morbosa, que la deje de mirar. Yo te respondo que la soga no se enrosca en su cuello, sino en su pie. No tiene por qué ser una carta fatal. Es un símbolo de espera, de suspensión, de atadura. Ahí el mundo está dado vuelta, o nosotros lo miramos al revés.",
            className: "grs-2 gre-3 gcs-3 gce-7",
            delay: 7000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 4,
            type: "img",
            page: 0,
            text: "",
            className: "gcs-1 gce-3 grs-2 gre-7 up",
            height: 450,
            delay: 16000,
            renderNext: true,
            url: "/assets/img/colgado.png",
            nextPage: false,
        },
    
       
        {   
            id: 17,
            type: "text",
            page: 0,
            text: "Giro la cabeza para verlo mejor. El Colgado parece resignado. Él tampoco puede irse si las ramas se queman, se queman, se queman. Él se quema con ellas.",
            className: "gcs-3 gce-7 grs-3 gre-4 center",
            delay: 1000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "Venís y me arrancás la carta de la mano. Doy un paso para atrás. Quiero alejarme más, pero no tengo dónde.",
            className: "gcs-3 gce-7 grs-4 gre-5 center",
            delay: 7000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 25,
            type: "text",
            page: 0,
            text: "La casa se quema,",
            className: "gcs-3 gce-5 grs-5 gre-6 up",
            delay: 7000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 25,
            type: "text",
            page: 0,
            text: "se quema,",
            className: "gcs-3 gce-5 grs-5 gre-6 up sequemaI",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        }, 
        {   
            id: 25,
            type: "text",
            page: 0,
            text: "se quema.",
            className: "gcs-3 gce-5 grs-5 gre-6 up sequemaII",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 25,
            type: "text",
            page: 0,
            text: "Y las puertas siguen cerradas. No puedo salir.",
            className: "gcs-3 gce-7 grs-5 gre-6 up nopuedo",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
       
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "Mis pies están hacia arriba, mi corazón en la escalera.",
            className: "gcs-3 gce-7 grs-5 gre-6 down",
            delay: 2500, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
    
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "Mi cabeza rueda, sin poder conectar",
            className: "gcs-3 gce-7 grs-6 up",
            delay: 3000, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "nada",
            className: "gcs-4 gce-5 grs-6 up right",
            delay: 1000, 
            renderNext: true,
            url: "",
            nextPage: false,
        }, 
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "con",
            className: "gcs-5 gce-6 grs-6 up center-hori",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "nada.",
            className: "gcs-6 gce-7 grs-6 up left",
            delay: 600, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 18,
            type: "text",
            page: 0,
            text: "Pienso en Filomena, la hija de Atenas. Yo también quiero convertirme en pájaro.",
            className: "gcs-3 gce-7 grs-6 gre-7 down",
            delay: 800, 
            renderNext: true,
            url: "",
            nextPage: false,
        },
        {   
            id: 121,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 2000, //animate__delay-1s
            renderNext: true,
            url: "/assets/sounds/Wellnow.mp3",
            nextPage: false,
        },
        {   
            id: 121,
            type: "audio",
            page: 0,
            text: "",
            className: "",
            delay: 5000, //animate__delay-1s
            renderNext: false,
            url: "/assets/sounds/Goodnight.mp3",
            nextPage: true,
        },
    ];;


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