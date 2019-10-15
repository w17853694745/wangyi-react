import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class Choice extends Component {
  changeRouter=(route)=>{
    this.props.history.replace(route)
  }
  render() {
    return (
      <div className="Homecontainer">
        <div className="wrapper">
          <div className="header">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"/>
          </div>
          <div className="choices">
            <div className="phone" onClick={()=>{this.changeRouter("/personal/phone")}}>
              <i className="phone-icon"></i>
              <span>手机号快捷登录</span>
            </div>
            <div className="email" onClick={()=>{this.changeRouter("/personal/email")}}>
              <i className="email-icon"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <div className="footer">
            <div className="list">
              <div className="left">
                <i className="left-icon"></i>
                <span>微信</span>
              </div>
              
              <div className="center">
                <i className="ceter-icon"></i>
                <span>QQ</span>
              </div>
              
              <div className="right">
                <i className="right-icon"></i>
                <span>微博</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Choice);