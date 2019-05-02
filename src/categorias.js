import React, { Component } from 'react';

import {database} from '../services/firebase'
// import { Container } from './styles';


import {Route, Link} from 'react-router-dom';
import Categoria from './categoria';

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
    const { match } = this.props
    return (
      <Route>
      <div class="container">
  <div class="row">
  {this.state.categorias.map(item => (
    <div class="col-sm">
    <Link to={`categorias/${item.slug}`}> <h5><strong>{item.nome}</strong></h5></Link>
    </div>
  ))}
  </div>


  <div className='container'>

 
  {JSON.stringify(this.props.match)}
   

  
  
  </div>
</div>
</Route>

      
      )
  }
}
