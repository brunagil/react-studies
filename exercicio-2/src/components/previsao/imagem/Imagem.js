import React from 'react'; 

function ImagemPrevisao (props) {
    return (
        <img className="previsao__img" src={ props.imagem } alt="imagem" />
    )
}

export default ImagemPrevisao 