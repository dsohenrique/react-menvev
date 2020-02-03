import React, { useState, useEffect, Component } from "react";
import Personagem from "./components/personagem";
import api from "./service/api";

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      personagens: [],
    }
  }

  async componentDidMount() {
    await api.get("people").then(
      response => {
        console.log(response.data.results);
        this.setState({personagens: response.data.results});
      }
    )
  };
  
render(){
  const { personagens } = this.state;
  return (
    <div id="app">
      <main>
        <ul>
        {personagens
            .sort((a, b) => a.name > b.name == 1)
            .map((personagem, index) => (
              <Personagem key={index}
               personagem={personagem} 
               />
            ))}
        </ul>
      </main>
    </div>
  );
}
}

export default App;
  /*
            */