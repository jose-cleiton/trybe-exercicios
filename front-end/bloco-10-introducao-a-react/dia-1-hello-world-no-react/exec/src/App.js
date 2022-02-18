// src/App.js
import React from 'react';
import Compras from './components/Compras';
import ObjAlbum from './components/ObjAlbum';


class App extends React.Component {
render() {
return (
    <div>   
        <Compras />
        <ObjAlbum/>
        </div>
    );
    };
}


export default App;