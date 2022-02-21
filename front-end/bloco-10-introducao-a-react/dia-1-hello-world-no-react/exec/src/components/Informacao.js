import React from "react";



class Informacao extends React.Component {
    
    render() {
        const {informacao: pokemon} = this.props;
        return (
            <div  id="id-informacao">
                <h5 className="text-center">{pokemon.name }</h5>
                <p>{pokemon.type}</p>
                <p>{pokemon.averageWeight.value}</p>
                <p>{pokemon.averageWeight.measurementUnit }</p>
            </div>    
        )
    }
}

export default Informacao;