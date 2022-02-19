import React from "react";
import Cards from "./Cards";

class Main extends React.Component {
    render() {
        return (
            <main className='container border border-primary text-center' >
                <Cards />
                <Cards />
            </main>
        )
    }
}
export default Main;