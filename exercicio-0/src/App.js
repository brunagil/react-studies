import React from 'react';
import logo from './logo.svg';
import './App.css';

const elemento = <p>Momo linda</p>

function App() {
  return (
    // O retorno da função deve ser apenas 1 só elemento, por isso ele deve estar sempre
    // envolto em tag div, ou React.Fragment ou só a tag sem nomenclatura


    //ELEMENTOS: https://pt-br.reactjs.org/docs/rendering-elements.html

    <React.Fragment>
      <h1>Count: 0</h1>
      <Descricao />
      <button>+1</button>
      <button>-1</button>
      <button>reset</button>
    </React.Fragment>
    
  );

  // ANATOMIA DO COMPONENTE: https://pt-br.reactjs.org/docs/components-and-props.html
  // 1. É uma função, 2. recebe um único parâmetro e 3. recebe um JSX.
  // Obrigatoriamente é criado com letra maíuscula
  // props são objetos com diversas propriedades
  function Descricao(props) {
    return (
      <div>
        <h2> Ele conta o tempo</h2>
      </div>
    );
  }
}

export default App;
