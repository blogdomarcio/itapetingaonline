import React, { Component } from 'react';
import Categorias from './categorias';
import Categoria from './categoria';

// import { Container } from './styles';
import EmpresasHome from './empresashome';

import {Route,Link} from 'react-router-dom';

export default class Empresas extends Component {
  render() {
      const { match } = this.props
    return (
        <div>
        <Route>
            <div class="row">
                <div class="col-2">
                <h4>Categorias</h4>
                <Categorias />
               
                </div>
                <div class="col-8">
                <h5> Relação de Empresas </h5>
                <Route exact path={match.url} component={EmpresasHome} />
                
                 <Route exact path={'/empresas/:slug'} component={Categoria} />
  
                </div>
                <div class="col-2">
               PROPAGANDA
                </div>
            </div>
            </Route>
        </div>
    );
  }
}
