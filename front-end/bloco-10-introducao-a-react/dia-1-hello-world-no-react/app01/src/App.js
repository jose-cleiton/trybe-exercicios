import React from 'react';
import './App.css'
import Header from './exeFixar/Header';
import Footer from './exeFixar/Footer';
  import Content from './exeFixar/Contente';

class App extends React.Component {
render() {
    return (
        <>
          <Header />
          <Content /> 
          <Footer/>
            
        </>
    );
    };
}


export default App;