import React from "react";


class Titulo extends React.Component {
    render() {
        const titulo = this.props;
        return <h1 className="display-1">{ titulo.text}</h1>
    }
}
export default Titulo;
