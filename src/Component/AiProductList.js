import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../Css/AiProductList.css';
import Logo from '../logo.svg';
import ProductItem from  './ProductItem';

class AiProductList extends Component {
  
  render() {

    const { ProductStore } = this.props;
    console.log('ProductStore', ProductStore);

    return (
        <div className='aiProductList'>
            <div className='title'>AI 추천 리스트</div>

            <br/>
            <div className='itemList'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
  }
}

export default AiProductList;