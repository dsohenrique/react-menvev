import React, { useState, useEffect, Component } from "react";
import Personagem from "./components/personagem";
import api from "./service/api";

class App extends Component {

  state = {
    personagens = [],
  }

  async componentDidMount() {
    await api.get("people").then(
      response => {
        console.log(response.data.results);
      }
    )
  };
  
render(){
  return (
    <div id="app">
      <main>
        <ul>
         /* {personagens
            .sort((a, b) => a.name > b.name == 1)
            .map((personagem, index) => (
              <Personagem key={index}
               personagem={personagem} 
               />
            ))}*/
        </ul>
      </main>
    </div>
  );
}
}

export default App;
