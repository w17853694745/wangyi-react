import React, { Component } from 'react'
import "./index.styl";
export default class LimitedTime extends Component {
  render() {
    return (
      <div className="LimitedTime">
        <div className="warper">
          <div className="header">
            <div className="left">
              <span>限时购</span>
              <div className="time">
                <span className="active">00</span>
                <span>:</span>
                <span className="active">00</span>
                <span>:</span>
                <span className="active">00</span>
              </div>
            </div>
            <a href="javascipt:">
              <span>更多</span>
              <span className="icon"></span>
            </a>
          </div>
          <div className="main">
            <div className="main-footer">
              <ul className="popularityList">
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/89307ce0d3406446faddf61039752cda.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥199
                    </div>
                    <div className="right">
                      ¥249
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/2a51732199acbc7d7d0ab5733ae3f782.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥10.9
                    </div>
                    <div className="right">
                      ¥100
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/e35ff5ceaeb7fe39e38ec95eb348d7d8.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥255
                    </div>
                    <div className="right">
                      ¥339
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/a7f4693aa7f7c1683340c6cd64286529.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥49
                    </div>
                    <div className="right">
                      ¥59
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/31cd86e1618ad56729c92aa3f81455c4.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥199
                    </div>
                    <div className="right">
                      ¥249
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/79ce75dee9f360313c7bf759f09dd9ba.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="left">
                      ¥179
                    </div>
                    <div className="right">
                      ¥199
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
