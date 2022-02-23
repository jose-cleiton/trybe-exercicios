import React from 'react';


class NumClics extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

    render() {
        const { handleClick } = this
        const {numeroDeCliques} = this.state
        return <button
            onClick={handleClick}
        >
        Nº de clics {numeroDeCliques}
        </button>
  }
}

export default NumClics;