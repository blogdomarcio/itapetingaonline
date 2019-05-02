import React, { Component } from "react";

import CategoriasHome from './categoriashome';
import Home from './home';
import Categoria from './categoria';

import './home.css';

import logo from '../img/itapetinga.svg';

import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';
import Empresas from "./empresas";


class NavbarPage extends Component {

render() {
  return (
    <Router>
    <div>
    <nav className="navbar navbar-expand-lg menuback navbar-dark">
    <Link className="navbar-brand text-white" to="/">Itapetinga OnLine</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Pagina Inicial <span class="sr-only">(página atual)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/categorias">Categorias</Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/empresas">Empresas</Link>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Ação</a>
            <a className="dropdown-item" href="#">Outra ação</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Algo mais aqui</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Desativado</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
        <button className="btn btn-success my-2 my-sm-0" type="submit">Pesquisar</button>
      </form>
    </div>
  </nav>
  </div>
  
  <div className='container text-center'>
  <br />
  <img src={logo} className="logo" alt="logo" />
  <hr />
  <br />
  </div>
  <div className='container'>
  <Route exact path='/' component={Home} />
  <Route exact path='/categorias' component={CategoriasHome} />
  <Route path='/empresas' component={Empresas} />

  
  </div>
  
    </Router>

    );
  }
}

export default NavbarPage;