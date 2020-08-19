import React, { useState, useEffect } from 'react'
import { TextArea } from './TextArea';
import { FILOMENA } from '../filo-completo.js';
const LAST_PAGE = 4;

export const TextScreen = () => {

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
    
    
    return (
        <div>
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