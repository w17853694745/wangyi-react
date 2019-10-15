import React, { Component } from 'react'

import "./index.styl";
export default class Header extends Component {
  render() {
    return (
      <div className="shopCarContainer">
        <div className="wrapper">
          <div className="left">
            <span>购物车</span>
          </div>
          <div className="right">
            <span>领券</span>
          </div>
        </div>
      </div>
    );
  }
}
