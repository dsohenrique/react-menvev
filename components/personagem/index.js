import React, { Component } from "react";
import './styles.css';

class Personagem extends Component {
  render() {
    return (
      <li className="personagem-card grid-container" key={this.props.id}>
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

export default Personagem;