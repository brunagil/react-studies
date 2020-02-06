import React from "react";
import Imagens from './Imagens'
import Descricoes from './Descricoes';

function Gatinhos(props) {
  return (
    <div className="comentario">
      <Imagens 
        imagem={ props.imagem }
      />

      <Descricoes 
        nome={ props.nome }
        subtitulo={ props.subtitulo }
        descricao={ props.descricao }
      />

    </div>
  );
}

export default Gatinhos 
