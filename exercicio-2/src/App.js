import React from "react";
import "./App.css";

import solzinho from "./sol.png";
import nuvenzinha from "./nuvens.png";
import Previsao from "./components/previsao/Previsao";

function App() {
  return (
    <div className="previsao-container">
      <Previsao
        dataApp={"31/05/2019"}
        tempo={"Ensolarado"}
        imagem={solzinho}
        temperaturaMaxima={"31°"}
        temperaturaMinima={"20°"}
      />

      <Previsao
        dataApp={"01/06/2019"}
        tempo={"Nublado"}
        imagem={nuvenzinha}
        temperaturaMaxima={"25°"}
        temperaturaMinima={"18°"}
      />
    </div>
  );
}

export default App;
