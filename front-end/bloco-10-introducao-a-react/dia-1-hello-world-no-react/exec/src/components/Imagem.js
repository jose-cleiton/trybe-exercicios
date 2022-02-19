import React from "react";


class Imagem extends React.Component {
    render() {
          const {informacao} = this.props;
        return (
            <div className="card" id="id-imagem">
               <img src={informacao.image} alt="..."/>          
            </div>      
        )
    }
}
export default Imagem