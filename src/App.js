import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import './App.css';
import './Css/Navbar.css';
import Navbar from '../src/Component/Navbar';
// import Join from '../src/Component/Join';
// import AiProductList from '../src/Component/AiProductList';
// import NewProductList from '../src/Component/NewProductList';
// import KakaoButton from '../src/Component/KakaoButton';
import Main from '../src/Component/Main'
class App extends Component {
 

  render() {
    return (
      
      <div>
        <>
          <Helmet>
            <meta property="og:url" content="http://pilalab.com" />
            <meta property="og:title" content="필라랩" />
            <meta property="og:type" content="필라테스 구인구직 및 대강" />
            <meta property="og:image" content="공유시 보여질 이미지 경로" />
            <meta property="og:description" content="공유시 보여질 설명" />
          </Helmet>
          {/* 컴포넌트 내용 */}
        </>
        {/* <BrowserRouter>
          <Route exact path="/" component={AiProductList} />
          <Route path="/new" component={NewProductList} />
        </BrowserRouter> */}
        <Navbar />
        <Main/>
      </div>
    );
  }
}

export default App;
