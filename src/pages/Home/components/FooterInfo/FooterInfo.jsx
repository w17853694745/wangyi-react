import React, { Component } from 'react'
import "./index.styl";
export default class FooterInfo extends Component {
  render() {
    return (
      <div className="FooterInfo">
        <div className="wrapper">
          <div className="header">
            <span className="left">下载APP</span>
            <span className="right">电脑版</span>
          </div>
          <div className="footer">
            <p>网易公司版权所有 © 1997-2019</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
    );
  }
}
