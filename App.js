import React, { Component } from "react";
import Personagem from "./components/personagem";
import OptionPersonagem from "./components/option-personagem";
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
            {
              this.state.personagens
              .sort((a, b) => a.name > b.name == 1)
              .map((personagem, index) => (
                <Personagem
                  id={index}
                  click={() => this.deletaPersonagemHandler(index)}
                  nome={personagem.name}
                  cor={personagem.eye_color}
                />
              ))
            }
          </ul>
        </main>
        <select id="selectFruit" className="form-control">
          <option value="">Deletar Personagem</option>
          {
            this.state.personagens
            .map((personagem, index) => (
                <OptionPersonagem
                  id={index}
                  click={() => this.deletaPersonagemHandler(index)}
                  nome ={ personagem.name }
                />
              ))
          }
        </select>
      </div>
    );
  }
}
export default App;
