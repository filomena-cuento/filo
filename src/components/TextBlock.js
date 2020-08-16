import React from 'react'

export const TextBlock = ({ props, isCurrent, isVisible }) => {
    const { text, className } = props; 
    
    let pClassName = '';

    if ( className.includes('mb-0') )  
        pClassName= 'mb-0';

    const finalClassName = className.concat(' animate__animated animate__fadeIn');
    return (
        <div className={ finalClassName } >
            <p className={pClassName}>{text}</p>   
        </div>
    )
}
