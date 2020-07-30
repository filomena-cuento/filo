import React from 'react'

export const ImageComponent = ({ props }) => {

    const { className, url } = props; 

    const finalClassName = className.concat(' animate__animated animate__fadeIn');

    return (
        <div className={ finalClassName }>
            <img src={ process.env.PUBLIC_URL + url } alt="" width="250" height="auto"/>
        </div>
    )
}
