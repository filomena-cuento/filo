import React from 'react';

export const AudioComponent = ({ props }) => {

    const { /*className,*/ url } = props;   

    return (
        <>
            <audio autoPlay>
                <source src={ process.env.PUBLIC_URL + url } type="audio/mpeg" />
            </audio>
        </>
    )
}
