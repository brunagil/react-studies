import React from "react";
import "./App.css";

//stateful
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  adicionaUm = () => {
    this.setState(prevState => {
      return {
        contador: prevState.contador + 1
      };
    });
  };

  subtraiUm = () => {
    this.setState(prevState => {
        if(prevState.contador > 0)
            return {
              contador: prevState.contador - 1
            };
        }
    );
  };

  reset = () => {
    this.setState(() => {
      return {
        contador: 0
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Count: {this.state.contador}</h1>
        <button onClick={this.adicionaUm}>+1</button>
        <button onClick={this.subtraiUm}>-1</button>
        <button onClick={this.reset}>reset</button>
      </React.Fragment>
    );
  }
}

export default App;
