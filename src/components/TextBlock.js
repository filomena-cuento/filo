import React from 'react'
import { useFetch } from '../hooks/useFetch';



export const TextBlock = ({ props }) => {

    const { text, className, imgUrl, soundUrl } = props; 
    
    const {data, loading, error} = useFetch(soundUrl);

    return (
        <div className={ className }>
            <audio autoPlay >
                <source src={data} type="audio/mpeg" />
            </audio>

            <img src={imgUrl} alt=""/>


            <p>{text}</p>   
        </div>
    )
    
}

