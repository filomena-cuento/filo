import React from 'react'
import { TextBlock } from './TextBlock';

export const TextArea = (props) => {
    const {textBlocksToRender, handleNextTextBlock} = props;


    return (
        <div>   
            <div className="container">
                <div className="row d">
                    <div className="textarea col-12">
                        <div>
                            {
                                textBlocksToRender.map( (textBlock) => {
                                    return (                                       
                                        <TextBlock key={ textBlock.id } props={ textBlock }/>
                                    )
                                })
                            }
                        </div>
                        <div className="next-text d-flex align-items-center" onClick={handleNextTextBlock}>                             
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
