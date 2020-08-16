import React from 'react'
import { TextBlock } from './TextBlock';
import { ImageComponent } from './ImageComponent';

export const TextAreaPage = ({ textBlocks }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="complete-textarea col-12 grid-wrapper">
                    { textBlocks.length === 0 ? (
                                <p>Cargando...</p>   
                            ) : (
                                textBlocks.map( dataBlock => typeOfBlockToRender(dataBlock) )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const typeOfBlockToRender = (dataBlock) => {
    
    if(dataBlock === undefined) 
        return;

    if( dataBlock.type === 'text' ) {

        return (<TextBlock
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