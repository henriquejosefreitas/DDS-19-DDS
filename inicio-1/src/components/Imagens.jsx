import React from 'react'
import Spfc from "../assets/Sao paulo campeao.jpg"

const Imagens = () => {
  return (
    <div>
        <h1>Imagens</h1>
        <h2>Sub-título de imagens</h2>
        {/* Imagem na pasta publica */}
        <img src = './PELÉ CAPA.jpg' width={900} height={500}></img>
        {/* Imagem na */}
        <img src={Spfc} width={900}height={500}></img>
    </div>
  )
}

export default Imagens