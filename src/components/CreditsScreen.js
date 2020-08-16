import React from 'react'
import { Link } from 'react-router-dom';

export const CreditsScreen = () => {
    return ( 
        <div className="container">
            <div className="row d">
                <div className="textarea col-12 grid-wrapper">
                    <div className="gcs-1 grs-1">
                        <h1>FILOMENA</h1>
                    </div>



                    <Link exact='true' to="/credits">
                        <div 
                            className="next-text d-flex align-items-center  animate__animated animate__fadeIn">                             
                            <p className="m-0 pb-01">
                                Terminar...
                            </p>
                            <i className="fa fa-play-circle ml-2" aria-hidden="true"></i>       
                        </div>
                    </Link>     
                </div>
            </div>
        </div>
    )
}
