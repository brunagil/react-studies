import React from 'react';
import './App.css';


const comentario1 = {
  autora: {
    nome: 'Mellina',
    imagem: 'https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg'
  },
  subtitulo: 'AMEI ESSE VÍDEO KERO +++',
  texto: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Leite de capivaris, leite de mula manquis sem cabeça. Si num tem leite então bota uma pinga aí cumpadi! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. '
}


const comentario2 = {
  autora: {
    nome: 'Joana',
    imagem: 'https://www.osaogoncalo.com.br/img/normal/50000/facebook-In-Stream_Square___Mia_gata_da_Kimberlyn__00052364_0.jpg',
  },
  subtitulo: 'Meh aChei NEEEM MAis Oi mEnOsx',
  texto: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."
}


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

  function Gatinhos(props) {
    return (
    <div className='comentario'>
    <img className='comentario__perfil' src={ props.imagem } alt='gatinho' ></img>
    <div>
      <h2 className='comentario__nome'> { props.nome } </h2>
      <h3 className='comentario__subtitulo'> { props.subtitulo } </h3>
      <hr />
      <p> { props.descricao } </p>
    </div>
  </div>
    )
  }
}

export default App;
