import React from 'react'


export const TextBlock = ({ props }) => {

    const { text, className, delay, continueRendering, imgPath, soundPath, nextPage } = props; 

    return (
        <div className={ className }>
            <audio autoPlay >
                <source src={soundPath} type="audio/mpeg" />
            </audio>
        
            <p>{text}</p>   
        </div>
    )
}
