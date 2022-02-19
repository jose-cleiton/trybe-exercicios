import React from "react";
import Cards from "./Cards";
import data from './data'
import Mostrar from './Mostrar';
class Main extends React.Component {
    render() {
        return (
            <main className='container border border-primary text-center' >
                <Cards/>
             
                 
            </main>
        )
    }
}
export default Main;