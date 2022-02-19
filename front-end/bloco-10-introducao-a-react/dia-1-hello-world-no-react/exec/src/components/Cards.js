/** @format */

import React from "react";
import Imagem from "./Imagem";
import Informacao from "./Informacao";

class Cards extends React.Component {
  render() {
    return (
      <div className="border border-secondary" id="id-cards">
        <Informacao />
        <Imagem /> 
      </div>
    );
  }
}
export default Cards;
