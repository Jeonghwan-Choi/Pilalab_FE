import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AiProductList from '../Component/AiProductList';
import '../Css/Board.css';
import { render } from '@testing-library/react';

// import './App.css';

class Board extends Component {


  render() {

    return (
      <div className='board_main'>
        <div className='board_main_div'>
          <div className='board_img_div'>
              <img className='board_img' src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F25834%2Fl2nean8w7ksrii2d__1080_790.jpg&w=1000&q=75'></img>
          </div>
          <div className='board_center_div'>
            <div className='board_register'>
              <p>지원하기</p>
            </div>
            <div className='map'>
              <div className='board_user_count_div'>
                <a>지원자수: </a>
                <a> 100</a>
              </div>
            </div>
          </div>
        </div>
        <div className='board_info'>
          <p className='board_title'>필라테스 정규직 모집 (의정이만)</p>
          <div className='board_info_div'>
          <p className='board_center'>의정 필라테스</p>
          <p className='board_location'>인천·부평</p>
          </div>
          <p>
          바디홀릭 보라매점 입니다
            <br/>
            평일 오후 
            <br/>
            <br/>
            월수금- 3타임
            <br/>
            <br/>
            화목 - 3타임
            <br/>
            6시30분 7시 30분 8시 30분 입니다
            <br/>
            이력서 보내주시고 
            <br/>
            확인 문자 부탁드립니다
          </p>
        </div>
      </div>      
    );
  }   
}

export default Board;
