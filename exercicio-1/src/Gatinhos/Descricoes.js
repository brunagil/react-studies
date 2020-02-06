import React from "react";

export default function Descricoes(props) {
  return (
    <div>
      <h2 className="comentario__nome"> {props.nome} </h2>
      <h3 className="comentario__subtitulo"> {props.subtitulo} </h3>
      <hr />
      <p> {props.descricao} </p>
    </div>
  );
}
