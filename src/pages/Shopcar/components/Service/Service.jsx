import React, { Component } from 'react'
import "./index.styl";
export default class service extends Component {
  render() {
    return (
      <div className="serviceContainer">
        <div className="wrapper">
          <ul className="serviceList">
            <li className="serviceItem">
              <i className="icon"></i>
              <span>30天无忧退货</span>
            </li>
            <li className="serviceItem">
              <i className="icon"></i>
              <span>48小时快速退款</span>
            </li>
            <li className="serviceItem">
              <i className="icon"></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
