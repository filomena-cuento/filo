import React from 'react'
import { TextAreaPage } from './TextAreaPage'
import { FILO1, FILO2, FILO3, FILO4, FILO5 } from '../filo-completo.js'

export const CompleteTextScreen = () => {

    return (
        <div className="black-bg">
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
