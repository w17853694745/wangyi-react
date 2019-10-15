import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import "./index.styl";

class Main extends Component {
  goLogin=()=>{
    this.props.history.replace("/personal")
  }
  render() {
    return (
      <div className="MainContainer">
        <div className="wrapper">
          <div className="header">
            <div className="img">
            </div>
          </div>
          <div className="button">
            <div className="text">
              去添加点什么吧
            </div>
            <div className="login" onClick={this.goLogin}>登录</div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Main);

