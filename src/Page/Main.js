import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import '../Css/Navbar.css';
import AiProductList from '../Component/AiProductList';
import NewProductList from '../Component/NewProductList';

class Main extends Component {


  render() {
    const { ProductStore } = this.props;

    return (
      <div>
        <AiProductList 
          ProductStore={ProductStore}
        />
        <NewProductList />
      </div>
    );
  }
}

export default Main;
