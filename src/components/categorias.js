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
      <div className="container">
  <div className="row">
  {this.state.categorias.map(item => (
    <div className="col-sm">
    <Link to={`/empresas/${item.slug}`}>
         <h5><strong>{item.nome}</strong></h5>
     </Link>
    </div>
  ))}
  </div>


  <div className='container'>
  
  </div>
</div>
</Route>

      
      )
  }
}
