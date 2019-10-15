import React, { Component } from 'react'
import "./index.styl";
export default class NewProducts extends Component {
  render() {
    return (
      <div className="NewProducts">
        <div className="warper">
          <div className="header">
            <span>新品首发</span>
            <a href="javascip:">
              <span>更多</span>
              <span className="icon"></span>
            </a>
          </div>
          <div className="main">
            <div className="main-footer">
              <ul className="popularityList">
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/462bb01f4928dcb1cc08dd726b593c94.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>柔润护唇膏</span>
                      <span className="price">¥24.9</span>
                    </div>
                  </div>
                  <div className="text-footer">
                    <p className="price">新品尝鲜价</p>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/c09d7cf66a445da4c45e560fb61a728b.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>秋冬暖绒沙发盖巾</span>
                      <span className="price">¥99.9</span>
                    </div>
                  </div>
                  <div className="text-footer">
                    <p className="price">新品尝鲜价</p>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/5e6f4b5523be752e53dbec8c81feeb1d.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>天鹅绒柔暖床笠</span>
                      <span className="price">¥109</span>
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/0d7f0028d1cb07ef67f2a865cbe9dbe6.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>女式加绒皮毛一体乐福鞋</span>
                      <span className="price">¥299</span>
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/ff2b35fc5025fc737e8a5f79206604bf.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>衣物除螨除菌液 1L/3L</span>
                      <span className="price">¥59.9</span>
                    </div>
                  </div>
                </li>
                <li className="item1">
                  <div className="img">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png?imageView&quality=65&thumbnail=330x330"
                      alt=""
                    />
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>地表强温 女式收腰派克大毛...</span>
                      <span className="price">¥1099</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
