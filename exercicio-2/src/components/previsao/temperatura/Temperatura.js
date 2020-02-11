import React from "react";

function Temperatura(props) {

  return(
  <table className="previsao-temperatura">
    <tr className="previsao-temperatura__linha">
      <th>Máxima</th>
        <td>{ props.temperaturaMaxima }</td>
    </tr>
    <tr className="previsao-temperatura__linha">
      <th>Mínima</th>
      <td>{ props.temperaturaMinima }</td>
    </tr>
  </table>

  )
}

export default Temperatura
