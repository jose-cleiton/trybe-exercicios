/**
 * Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
 */

/**Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
 * 
 * Garanta acesso ao objeto this na função que você declarou.
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
      }

      handleButtonOne() {
        alert('"this" do botão 1 :', this);
      }
      
      handleButtonTwo() {
        alert('"this" do botão 2 :', this);
      }
      
      handleButtonThree() {
        alert('"this" do botão 3 :', this);
      }
      render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1</button>
            <button onClick={ this.handleButtonTwo }>Botão 2</button>
            <button onClick={ this.handleButtonThree }>Botão 3</button>
          </div>
        );
      }
    }

    

    export default Fixar;