import React, { Component } from "react";

class OptionPersonagem extends Component {

  render() {
    return (
      <option key={this.props.id}>{this.props.nome}</option>
    );
  }
}
export default OptionPersonagem;