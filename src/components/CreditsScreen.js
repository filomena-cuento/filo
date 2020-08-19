import React from 'react'
import { Link } from 'react-router-dom';

export const CreditsScreen = () => {
    return ( 
        <div className="container">
            <div className="row animate__animated animate__fadeIn">
                <div className="textarea col-12 grid-wrapper ">
                    
                    <div className="gcs-1 gce-7 grs-1 center-hori">
                        <h1 className="">FILOMENA</h1>                       
                    </div>
                    <div className="gcs-2 gce-6 grs-1 down">
                        <hr/>                   
                    </div>

                    <div className="gcs-1 gce-3 grs-3 tar">    
                        <p className="mb-0">Texto: </p>
                        <p className="mb-0">Programación: </p>
                        <p className="mb-0">Ilustraciones: </p>    
                        <p className="mb-0">Fotografía: </p>
                        
                    </div>

                    <div className="gcs-3 gce-7 grs-3 left">
                        <p className="mb-0"> Paula Yeyati Preiss</p>
                        <p className="mb-0"> Julián Gonzalez Heredia</p>
                        <p className="mb-0"> Lara Yeyati Preiss</p>    
                        <p className="mb-0"> Clarisa Moreyra</p>
                            
                    </div>

                    <div className="gcs-1 gce-3 grs-4 tar up mt-2">
                        <p className="mb-0">Audios: </p>
                    </div>
                    <div className="gcs-3 gce-7 grs-4 left up mt-2">
                        <p className="mb-0"> Extractos de The Waste Land leídos por T. S. Eliot.</p>
                        <p>
                            <a className="link" href="https://web.archive.org/web/20040610201304/http://town.hall.org/Archives/radio/IMS/HarperAudio/011894_harp_ITH.html">
                                Disponibles en dominio común.
                            </a>
                        </p>   
                    </div>

                    <div className="gcs-5 gce-7 grs-6">
                        <Link exact='true' to="/cuento" className="link">
                            <div className=" d-flex align-items-center link">                             
                                <p className="m-0 pb-1">
                                    Leer el texto completo
                                </p>
                                <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>       
                            </div>
                        </Link>
                    </div>
                    <div className="gcs-2 gce-4 grs-6">
                        <Link exact='true' to="/" className="link">
                            <div className=" d-flex align-items-center">                             
                                <i className="fa fa-arrow-left ml-2" aria-hidden="true">  </i>       
                                <p className="pl-1 m-0 pb-1">
                                    Volver a empezar
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

//nada con nada
