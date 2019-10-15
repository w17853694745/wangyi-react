import React, { Component } from 'react'
import "./index.styl";

export default class NewPeople extends Component {
  render() {
    return (
      <div className="NewPeople">
        <div className="warper">
          <div className="header">新人专享礼</div>
          <div className="main">
            <div className="package">
              <div className="package-text">新人专享礼包</div>
              <div className="img">
                <img
                  src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
                  alt="礼包"
                />
              </div>
              <div className="flow"></div>
            </div>
            <div className="right">
              <div className="welfare">
                <a href="javascrip">
                  <div className="text">
                    <div className="text-header">福利社</div>
                    <div className="text-footer">今日特价</div>
                  </div>
                  <div className="img">
                    <div className="img-header">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/9032e04ee24f14607f2a8b5635ebcd95.png?imageView&thumbnail=200x200&quality=75"
                        alt=""
                      />
                    </div>
                    <div className="img-footer">
                      <div className="one">¥54.4</div>
                      <div className="two">¥99</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="new">
                <a href="javascrip:">
                  <div className="text">
                    <div className="text-header">新人拼团</div>
                    <div className="text-footer">1元起包邮</div>
                  </div>
                  <div className="img">
                    <div className="img-header">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/089fd1b96fa7be9776edb1f43878f826.png?imageView&thumbnail=200x200&quality=75"
                        alt=""
                      />
                    </div>
                    <div className="img-footer">
                      <div className="one">¥20.4</div>
                      <div className="two">¥48</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
