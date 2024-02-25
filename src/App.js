/* eslint-disable no-unused-vars */
import './App.css';
import Componente from './Componente.js';
import React, { Component } from 'react'; // Importar Component de 'react'
class App extends Component {
  nextId = 1;
  state = {
    users: [
      { nome: 'Caique', cargo: 'Desenvolvedor front end', foto: 'user1.png', id: this.nextId++},
      { nome: 'Lucas', cargo: 'UX/UI', foto: 'user2.png', id: this.nextId++ }
      
    ]
  }
  criarUser =()=>{
    console.log("criar usuario");
  }

  render() {
  
    return (
      <div className="App">
        <div>
          {this.state.users.map((user) => (
            <Componente key={user.id} nome={user.nome} cargo={user.cargo} foto={user.foto} />
          ))}
        </div>
        <button className='cadastrar-btn' onClick={this.criarUser}>salvar</button>
      </div>
    );
  }
}

export default App;
