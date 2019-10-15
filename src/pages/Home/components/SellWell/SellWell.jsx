import React, { Component } from 'react'
import "./index.styl";
export default class SellWell extends Component {
  render() {
    return (
      <div className="SellWell">
        <div className="warper">
          <div className="header">
            <span>类目热销榜</span>
          </div>
          <div className="main">
            <ul className="wellList">
              <li className="wellItem1">
                <div className="text">
                  热销榜
                </div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/a5b6447bf85a8ff946c9438fe2ee740a.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="wellItem2">
                <div className="text">
                  好评榜
                </div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/d13a653535740e0091d856cdea006c1d.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
            </ul>
            <ul className="wells">
              <li className="item">
                <div className="text">居家生活榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">美食酒水榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">服饰鞋包榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">个护清洗榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">数码家电榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/3ddebc9df09f6b10b9b301d1edf2c303.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">母婴亲子榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">运动旅行榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
              <li className="item">
                <div className="text">全球特色榜</div>
                <div className="img">
                  <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt=""/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
