import { render } from "@testing-library/react";
import React from "react";
import data from './data'
class Mostrar extends React.Component {
    render() {
          const dados = this.props;
        return (
            <>
             <h2>{dados.name }</h2>
             <h2>{dados.tipo}</h2>
             <h2>{dados.peso}</h2>
             <h2>{dados.unidMedida }</h2>        
            </>
        )
    }
}
export default Mostrar;