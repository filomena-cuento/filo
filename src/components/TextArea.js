import React, { useState, useEffect } from 'react'
import { TextBlock } from './TextBlock';
import { AudioComponent } from './AudioComponent';
import { ImageComponent } from './ImageComponent';

export const TextArea = ( props ) => {
    
    // Holds dataBlocks of current page and function to change page
    const { dataBlocksToRender, currentPage, handleNewPage } = props;
    
    // Holds currently rendered data blocks
    const [renderedDataBlocks, setRenderedDataBlocks] = useState([]);

    // Holds the id of the next element to be rendered
    const [nextDataBlock, setNextDataBlock] = useState(0);
    //console.log('Render');

    //Triggers the first render of the page
    useEffect( () => {
        handleNextDataBlock();
    }, [dataBlocksToRender])

    // Keeps the id next data block to be rendered always updated
    // useEffect( () => {
    //     console.log('actualizar nextDataBlock');
        
    //     setNextDataBlock(nextDataBlock + 1);

    //     // console.log(lastId);
    //     // console.log(renderedDataBlocks);
    //     // if(renderedDataBlocks.length !== 0 && renderedDataBlocks[lastId].renderNext ) {
    //     //     handleNextDataBlock();
    //     // }

    // }, [renderedDataBlocks])

    useEffect( () => {

        const handleKeepRendering = async () => {
            if( (nextDataBlock !== 0) && dataBlocksToRender[nextDataBlock - 1].renderNext ){
                await sleep(dataBlocksToRender[nextDataBlock].delay);
                handleNextDataBlock();
            }
        }

        handleKeepRendering();        
    }, [nextDataBlock])

    
    // Sets next textBlock on textBlocksToRender for it to be rendered when user presses 'next'
    const handleNextDataBlock = () => {
        //console.log('handle next: ' + nextDataBlock);
        setRenderedDataBlocks([
            ...renderedDataBlocks,
            dataBlocksToRender[nextDataBlock]
        ]);
        setNextDataBlock(nextDataBlock + 1);

        

    }

    return (
        <div>   
        {console.log('render')}
            <div className="container">
                <div className="row d">
                    <div className="textarea col-12 grid-wrapper">
                        { renderedDataBlocks.length === 0 ? (
                                <p>Cargando...</p>   
                            ) : (
                                renderedDataBlocks.map( dataBlock => typeOfBlockToRender(dataBlock) )
                            )
                        }
                        <div className="two"></div>
                        <div className="three"></div>
                    
                        <div 
                            className="next-text d-flex align-items-center" 
                            // onClick={handleNextDataBlock}
                            onClick={handleNewPage}
                        >                             
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