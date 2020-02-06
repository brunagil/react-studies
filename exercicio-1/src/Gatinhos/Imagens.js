import React from "react";

export default function Imagens(props) {
  return (
    <img className="comentario__perfil" src={ props.imagem } alt="gatinho"></img>
  );
}

//exemplos de componentes simples com o uso de arrow functions
const Imagens2 = (props) => {
    return (
        <img className="comentario__perfil" src={ props.imagem } alt="gatinho"></img>
    )
}
//arrow function com uma propriedade e retorno
const Imagens3 = props => <img className="comentario__perfil" src={ props.imagem } alt="gatinho"></img>