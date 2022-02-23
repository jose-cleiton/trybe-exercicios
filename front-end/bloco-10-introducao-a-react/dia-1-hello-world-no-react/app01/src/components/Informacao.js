import React from "react";



class Informacao extends React.Component {
    
    render() {
        const {informacao} = this.props;
        return (
            <div  id="id-informacao">
                <p>{informacao.name }</p>
                <p>{informacao.type}</p>
                <p>{informacao.averageWeight.value}</p>
                <p>{informacao.averageWeight.measurementUnit }</p>
            </div>
    
        )
    }
}

export default Informacao;