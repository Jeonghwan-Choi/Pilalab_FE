import React, { Component } from 'react';
import Kakao from 'kakaojs'; // Kakao 객체를 import


class KakaoLogin extends Component {
  componentDidMount() {
    // 카카오 API 초기화
    Kakao.init('99ae37e09570f29ddcd3ca26ef231803');
    // 카카오 로그인 버튼 생성
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: (authObj) => {
        console.log('authObj',authObj)

        // 카카오 로그인 성공 시 처리할 콜백 함수
        Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            // 사용자 정보 처리
            console.log('result',res)
            const { id, properties } = res;
            console.log(`Kakao ID: ${id}`);
            console.log(`Nickname: ${properties.nickname}`);
          },
          fail: (error) => {
            console.log(error);
          },
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }

  render() {
    return (
      <div>
        {/* 카카오 로그인 버튼을 표시할 요소 */}
        <div id="kakao-login-btn"></div>
      </div>
    );
  }
}

export default KakaoLogin;
