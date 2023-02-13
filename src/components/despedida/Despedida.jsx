import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './despedida.css'

export default function Inicio() {
    let navigate = useNavigate()
    return (
        <div className="despedida">
            <div className="mensaje">
                <span className="adios">Gracias, <span className='frase'>Nos Vemos Pronto</span></span>

                <span className='exit' onClick={() => navigate('/')}>Volver</span>
            </div>
        </div>
    )
}
