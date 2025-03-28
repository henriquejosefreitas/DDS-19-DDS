import React from 'react'

const Events = () => {
    const teste = (e) => {
        // e = propriedades do evento que chamou a função
        console.log(e);

        console.log("teste a função externa")
    };
  return (
    <div>
        <button onClick={() => {console.log("Testei o primeiro botão")}}>
            Cli k aqui
        </button>
        <button onClick={teste}>Cli k 2</button>
    </div>
  )
}

export default Events