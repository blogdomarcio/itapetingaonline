import React, { Component } from 'react';

import {database} from '../services/firebase'
// import { Container } from './styles';

export default class Categorias extends Component {

    state = {
        categorias:[],
        isLoading: false
      };
    
      
      componentDidMount() {
        this.setState({ isLoading: true });
        this.categorias = database.ref("categorias");
        this.categorias.on("value", snapshot => {
          this.setState({
            categorias: snapshot.val(),
            isLoading: false
            
          });
          
          
         
        });
      }

  render() {
    return (
      <div class="container">
  <div class="row">
  {this.state.categorias.map(item => (
    <div class="col-sm">
    <h2><strong>{item.nome}</strong></h2>
    </div>
  ))}
  </div>
</div>
      
      )
  }
}
