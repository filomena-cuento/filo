import React from 'react'

export const TextBlock = ({ props, isCurrent, isVisible }) => {
    const { text, className } = props; 
    

    const finalClassName = className.concat(' animate__animated animate__fadeIn');
    return (
        <div className={ finalClassName } >
            <p>{text}</p>   
        </div>
    )
}
