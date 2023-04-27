import React, { Component } from 'react';

import Join from '../Component/Join';

class Login extends Component {


  render() {
    const { ProductStore } = this.props;

    return (
      <div>
        <Join />
      </div>
    );

  }
}

export default Login;
