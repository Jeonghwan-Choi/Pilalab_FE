import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import '../Css/Navbar.css';
import AiProductList from './AiProductList';
import NewProductList from './NewProductList';

class Main extends Component {


  render() {
    return (
      <div>
        <AiProductList />
        <NewProductList />
      </div>
    );
  }
}

export default Main;
