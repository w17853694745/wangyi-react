import React, { Component } from 'react'
import "./index.styl";
export default class Popularity extends Component {
  render() {
    return (
      <div className="Popularity">
        <div className="warper">
          <div className="header">
            <span>人气推荐</span>
            <a href="javascip:">
              <span>更多</span>
              <span className="icon"></span>
            </a>
          </div>
          <div className="main">
            <div className="main-header">
              <div className="img">
                <img src="https://yanxuan-item.nosdn.127.net/7ee6fafe787e7b26498a5f49cf2b937b.png?imageView&quality=65&thumbnail=280x280" alt=""/>
              </div>
              <div className="text">
                <div className="time">
                  <span>限时购</span>
                </div>
                <div className="info">
                  95%白鹅绒保暖羽绒被 升级款
                </div>
                <div className="info2">
                  热销5万+条，洁净舒柔好睡眠
                </div>
                <div className="price">
                  <span className="left">¥</span>
                  <span>1149</span>
                </div>
              </div>
            </div>
            <div className="main-footer">
              <ul className="popularityList">
                <li className="item1">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>网易智造蒸汽沐足盆（可单买...</span> 
                      <span className="price">
                        ¥449
                      </span>      
                    </div>
                  </div>
                  <div className="text-footer">
                    <p className="discount">
                      满400减60券
                    </p>
                  </div>
                </li>
                <li className="item2">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/35bdc218b4daa12e06b211908f6ce3b9.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>网易智造太空舱按摩大师椅</span> 
                      <span className="price">
                        ¥9479
                      </span>      
                    </div>
                  </div>
                  <div className="text-footer">
                    <p>
                      抄底特惠
                    </p>
                    <p>
                      满赠
                    </p>
                  </div>
                </li>
                <li className="item3">
                  <div className="img">
                    <img src="https://yanxuan-item.nosdn.127.net/5328548b08399e3347cc1d9679d9943f.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                  </div>
                  <div className="text-header">
                    <div className="name">
                      <span>免洗式 乳酸菌冰沙睡眠面膜...</span> 
                      <span className="price">
                        ¥49.9
                      </span>      
                    </div>
                  </div>
                  <div className="text-footer">
                    <p>
                      好货内部价
                    </p>
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
