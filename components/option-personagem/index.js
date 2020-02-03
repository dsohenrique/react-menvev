import React, { Component } from "react";

class OptionPersonagem extends Component {
  render() {
    console.log(this.props.nome)
    return (
      <option key={this.props.id} onClick={this.props.click}>{this.props.nome}</option>
    );
  }
}
export default OptionPersonagem;