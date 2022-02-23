/**
 * Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
 */

/**Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
 * 
 * Garanta acesso ao objeto this na função que você declarou.
 * Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

 */
        // src/App.js
    import React from 'react';

    class Fixar extends React.Component {
         // src/App.js
  constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }

      handleButtonOne() {
        this.setState((prevState) => ({
          clicksBtnOne: prevState.clicksBtnOne + 1,
        }));
      }
      
      handleButtonTwo() {
        this.setState((prevState) => ({
          clicksBtnTwo: prevState.clicksBtnTwo + 1,
        }));
      }
      
      handleButtonThree() {
        // A única coisa diferente é a desconstrução.
        // Apenas um método diferente de fazer a mesma coisa
        // do que foi feito nas funções anteriores.
        this.setState(({ clicksBtnThree }) => ({
          clicksBtnThree: clicksBtnThree + 1,
        }));
      }
      
      render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
          </div>
        );
      }
    }

    

    export default Fixar;