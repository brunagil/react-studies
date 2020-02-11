import React from 'react'

function HeaderPrevisao(props) {
    return(
    <>
        <h2 className="previsao__data">{props.data}</h2>
        <p className="previsao__resumo ">{props.tempo}</p>
    </>
    )
}

export default HeaderPrevisao 