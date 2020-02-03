import React, { useState, useEffect, Component } from "react";
import Personagem from "./components/personagem";
import api from "./service/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personagens: []
    };
  }

  deletaPersonagemHandler = indexPersonagem => {
    const personagens = this.state.personagens;
    personagens.splice(indexPersonagem, 1);
    this.setState({ personagens: personagens });
  };

  async componentDidMount() {
    await api.get("people").then(response => {
      this.setState({ personagens: response.data.results });
    });
  }

  render() {
    const { personagens } = this.state;
    return (
      <div id="app">
        <main>
          <ul>
            {this.state.personagens
              .sort((a, b) => a.name > b.name == 1)
              .map((personagem, index) => (
                <Personagem
                  key={index}
                  click={() => this.deletaPersonagemHandler(index)}
                  nome={personagem.name}
                  cor={personagem.eye_color}
                />
              ))}
          </ul>
        </main>
      </div>
    );
  }
}

class Personagem extends Component {
  render() {
    return (
      <li className="personagem" key={this.props.key}>
        <div className="personagem-info">
          <strong style={{ color: this.props.cor }}>{this.props.nome}</strong>
        </div>
        <div className="personagem-buttons">
          <button onClick={this.props.click}>Excluir</button>
        </div>
      </li>
    );
  }
}

export default App;
