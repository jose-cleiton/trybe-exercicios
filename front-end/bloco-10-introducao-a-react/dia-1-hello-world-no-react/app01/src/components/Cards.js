/** @format */

import React from "react";
import Imagem from "./Imagem";
import Informacao from "./Informacao";
import data from "./data";

class Cards extends React.Component {
  render() {
    return (
      <div  id ='id-pokemon'>
        {data.map((pokemon) => (
          <div id="id-cards">
            <Informacao informacao={pokemon} />
            <Imagem informacao={pokemon} />
          </div>
        ))}
      </div>
    );
  }
}
export default Cards;
