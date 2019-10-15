import React, { Component } from 'react'
import "./index.styl";
export default class Special extends Component {
  render() {
    return (
      <div className="Special">
        <div className="warper">
          <div className="header">
            <span>品牌制造商直供</span>
            <a href="javascipt:">
              <span>更多</span>
              <span className="icon"></span>
            </a>
          </div>
          <div className="main">
            <ul className="specialList">
              <li className="specialItem1">
                <div className="text">
                  <div className="top">海外制造商</div>
                  <div className="bottom">
                    9.9元起
                    <span>上新</span>
                  </div>
                </div>
              </li>
              <li className="specialItem2">
                <div className="text">
                  <div className="top">海外制造商</div>
                  <div className="bottom">9.9元起</div>
                </div>
              </li>
              <li className="specialItem3">
                <div className="text">
                  <div className="top">海外制造商</div>
                  <div className="bottom">9.9元起</div>
                </div>
              </li>
              <li className="specialItem4">
                <div className="text">
                  <div className="top">海外制造商</div>
                  <div className="bottom">9.9元起</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
