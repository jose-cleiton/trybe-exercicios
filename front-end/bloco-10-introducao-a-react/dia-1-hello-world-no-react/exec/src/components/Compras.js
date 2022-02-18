import React from "react";

class Compras extends React.Component {
    render() {
         const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });
     return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
   }
}

export default Compras;
// o console log foi adicionado para facilitar a compreensão
