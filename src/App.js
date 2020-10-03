import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor';


function App() {
  return (
    <div className="App">
      <h1>Conversror de Moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
}

export default App;
