import './App.css';
const classe = 'hello-class';
function helloWorld (nome, sobrenome) {
  return <h1 className={classe} >Hello, {`${nome} ${sobrenome}`}</h1>;
}
const element = helloWorld("Jorge", "Maravilha");

const container = <div >{element}</div>;
const time = (
    <div>

    </div>
  );
function App() {
  

  return (
    <div className="App">
      {container}
      {time}
    </div>
  );
}

export default App;
