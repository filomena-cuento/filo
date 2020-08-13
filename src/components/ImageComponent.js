import React from 'react'

export const ImageComponent = ({ props }) => {

    const { className, height, url } = props; 

    const finalClassName = className.concat(' animate__animated animate__fadeIn center-vert');

    return (
        <div className={ finalClassName }>
            <img src={ process.env.PUBLIC_URL + url } alt="" width="auto" height={height}/>
        </div>
    )

}
