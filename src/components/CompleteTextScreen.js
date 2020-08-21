import React from 'react'
import { Link } from 'react-router-dom'

import { TextAreaPage } from './TextAreaPage'
import { FILO1, FILO2, FILO3, FILO4, FILO5 } from '../filo-completo.js'

export const CompleteTextScreen = () => {

    const background = process.env.PUBLIC_URL + '/assets/img/room-long.jpg';

    return (
        <div className="black-bg" style={{backgroundImage: "url(" + background + ")"}}>
            <div className="container pb-1">
                <div className="row justify-content-between">
                    <div className="col-2 ">
                        <Link exact='true' to="/credits" className="link ">
                            <div className=" d-flex align-items-center">   
                                <i className="fa fa-arrow-left ml-2" aria-hidden="true">  </i>                           
                                <p className="pl-1 m-0 pb-1">
                                    Créditos
                                </p>    
                            </div>
                        </Link>
                    </div>
                    <div className="col-2 align-self-right ">
                        <Link exact='true' to="/" className="link link-right">
                            <div className="d-flex align-items-center">                             
                                <p className="pl-1 m-0 pb-1">
                                    Volver a empezar
                                </p>
                                <i className="fa fa-arrow-right ml-2" aria-hidden="true">  </i>       
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <TextAreaPage textBlocks={ FILO1 }/>
                <TextAreaPage textBlocks={ FILO2 }/>
                <TextAreaPage textBlocks={ FILO3 }/>
                <TextAreaPage textBlocks={ FILO4 }/>
                <TextAreaPage textBlocks={ FILO5 }/>
            </div>
       
        </div>
    )
}
