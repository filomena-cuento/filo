import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBlock } from './TextBlock';
import { AudioComponent } from './AudioComponent';
import { ImageComponent } from './ImageComponent';

export const TextArea = ( props ) => {
    
    // Holds dataBlocks of current page and function to change page
    const { dataBlocksToRender, isLastPage, handleNewPage } = props;
    
    // Holds currently rendered data blocks
    const [renderedDataBlocks, setRenderedDataBlocks] = useState([]);

    // Holds the id of the next element to be rendered
    const [nextDataBlock, setNextDataBlock] = useState(0);

    // Should the 'next' show or not
    const [showNext, setShowNext] = useState(false);

    //Triggers the render of the first line
    useEffect( () => {
        handleNextDataBlock();
    }, [dataBlocksToRender])

    // Triggers the rendering of consecutive lines
    useEffect( () => {
        handleKeepRendering();        
    }, [nextDataBlock])
    
    //Handles the rendering of consecutive lines
    const handleKeepRendering = async () => {
        if( nextDataBlock !== 0 && dataBlocksToRender[nextDataBlock - 1].renderNext ){
            await sleep(dataBlocksToRender[nextDataBlock].delay);
            handleNextDataBlock();
        } else if (nextDataBlock !== 0 && !dataBlocksToRender[nextDataBlock - 1].renderNext) {
            setShowNext(true);

        }
    }
    // Sets next textBlock on textBlocksToRender for it to be rendered when user presses 'next'
    const handleNextDataBlock = () => {
        setRenderedDataBlocks([
            ...renderedDataBlocks,
            dataBlocksToRender[nextDataBlock]
        ]);
        setNextDataBlock(nextDataBlock + 1);
    }

    // Performs cleanup of the page when loading a new one
    const handleNextPage = () => {
        setNextDataBlock(0);
        setShowNext(false);
        setRenderedDataBlocks([]);
        handleNewPage();
    }

    return (
        <div>   
            <div className="container">
                <div className="row d">
                    <div className="textarea col-12 grid-wrapper">
                        { renderedDataBlocks.length === 0 ? (
                                <p>Cargando...</p>   
                            ) : (
                                renderedDataBlocks.map( dataBlock => typeOfBlockToRender(dataBlock) )
                            )
                        }
                        { (showNext && !isLastPage) ?(
                            <div 
                                className="next-text d-flex align-items-center  animate__animated animate__fadeIn" 
                                onClick={handleNextPage}
                            >                             
                                <p className="m-0 pb-01">
                                    Siguiente
                                </p>
                                <i className="fa fa-play-circle ml-2" aria-hidden="true"></i>       
                            </div>
                        ) : (
                            (showNext && isLastPage) ? (
                                <Link exact='true' to="/credits" className="link">
                                    <div 
                                        className="next-text d-flex align-items-center  animate__animated animate__fadeIn">                             
                                        <p className="m-0 pb-01">
                                            Fin
                                        </p>
                                        <i className="fa fa-play-circle ml-2" aria-hidden="true"></i>       
                                    </div>
                                </Link>
                                ) : (
                                    <></>
                                )
                        )
                    
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const typeOfBlockToRender = (dataBlock) => {
    
    if(dataBlock === undefined) 
        return;

    if( dataBlock.type === 'text' ) {

        return (<TextBlock 
            key={ dataBlock.id } 
            props={ dataBlock } 
        />)

    } else if ( dataBlock.type === 'audio' ) {

        return (<AudioComponent 
            key={ dataBlock.id } 
            props={ dataBlock }
        />)

    } else if ( dataBlock.type === 'img') {
        return (<ImageComponent 
            key={ dataBlock.id } 
            props={ dataBlock } 
        />)
    } 
}