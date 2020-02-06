import React from 'react';
import './App.css';
import Gatinhos from './Gatinhos/Gatinhos'
import { comentario1, comentario2 }  from './Gatinhos/data'

function App() {
  return (
    <React.Fragment>
      <Gatinhos 
        nome={ comentario1.autora.nome }
        imagem={ comentario1.autora.imagem }
        subtitulo={ comentario1.subtitulo }
        descricao= { comentario1.texto }
      />
        <Gatinhos 
        nome={ comentario2.autora.nome }
        imagem={ comentario2.autora.imagem }
        subtitulo={ comentario2.subtitulo }
        descricao= { comentario2.texto }
      />
    </React.Fragment>
  );

}

export default App;
