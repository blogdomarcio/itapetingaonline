import React, { Component } from 'react';

// import { Container } from './styles';

export default class Categoria extends Component {
  render() {
    return (
        <div> FILTRA CATEGORIA 
        
        {JSON.stringify(this.props.match)}

        <h1>{this.props.match.params.slug}</h1>
        
        </div>
       
    );
  }
}
