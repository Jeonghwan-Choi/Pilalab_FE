import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import './Css/Navbar.css';
import Navbar from '../src/Component/Navbar';
import Join from '../src/Component/Join';
import AiProductList from '../src/Component/AiProductList';
import NewProductList from '../src/Component/NewProductList';
import KakaoButton from '../src/Component/KakaoButton';

class App extends Component {
 

  render() {
    return (
      <div>

         <Navbar />
        <Join />
        {/* <AiProductList /> */}
        {/* <NewProductList /> */}
      </div>
    );
  }
}

export default App;
