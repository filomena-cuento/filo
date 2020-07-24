import { useState, useEffect } from 'react'


export const useFetch = ( url ) => {
    const [response, setResponse] = useState({data: null, loading: true, error: null});

    useEffect( () => {

        setResponse({data:null, loading:true, error: null})
        
        fetch( url )
            .then( resp => resp.blob())
            .then( data => {
                console.log(data);
                setResponse({loading: false, error:null, data: data})

            })
    }, [url]);

    return response;
}