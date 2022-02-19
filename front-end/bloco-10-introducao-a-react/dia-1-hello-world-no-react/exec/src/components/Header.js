import React from "react";
import Titulo from "./Titulo";

class Header extends React.Component {
    render() {
        return (
            <header className='container border border-primary text-center' >
               <Titulo /> 
            </header>
        )
    }
}
export default Header;
