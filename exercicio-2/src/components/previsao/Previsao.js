import React from 'react'
import HeaderPrevisao from './header/Header'
import ImagemPrevisao from './imagem/Imagem'
import Temperatura from './temperatura/Temperatura'

export default function Previsao(props) {
    console.log(props, 'props')
    return (
        <div className="previsao">
            <HeaderPrevisao 
                data={props.dataApp}
                mellina={'bruna'}
                tempo={props.tempo}
            />
            <ImagemPrevisao 
                imagem={props.imagem}
            />
            <Temperatura 
                temperaturaMaxima={props.temperaturaMaxima}
                temperaturaMinima={props.temperaturaMinima}
            />
        </div>

    )
}
