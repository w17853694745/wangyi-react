import React, { Component } from 'react'
import "./index.styl";
export default class ServicePolicy extends Component {
  state={
    PolicyList:[
      {
        img:"http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png",
        text:"网易自营品牌"
      },
      {
        img:"http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png",
        text:"30天无忧退货"
      },
      {
        img:"http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png",
        text:"48小时快速退款"
      }
    ]
  }
  render() {
    const { PolicyList } = this.state;
    return (
      <div className="container">
        <ul className="Policys">
          {
            PolicyList.map((item,index)=>{
              return (
                <li className="PolicyItem" key={index}>
                  <a href="javascrip:" className="PolicyInfo">
                    <img src={item.img} className="img"/>
                    <span className="text">{item.text}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
