import React, { Component } from "react";

class Personagens extends Component {

  render() {
    return (
      <ul>
        {this.props.personagens
          .sort((a, b) => a.name > b.name == 1)
          .map((personagem, index) => (
            <li className="personagem" key={index}>
              <div className="personagem-info">
                <strong style={{ color: personagem.eye_color }}>
                  {personagem.name}
                </strong>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}
