import React, { Component } from 'react'
import "./index.styl";
export default class SuperValue extends Component {
  state={
    superList:[
      {
        text1:"9.9超值专区",
        text2:"190款商品定价直降",
        img1:"https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75",
        img2:"https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" 
      },
      {
        text1:"享住",
        text2:"家的多种可能",
        img1:"https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&thumbnail=150x150&quality=75",
        img2:"https://yanxuan-item.nosdn.127.net/f28c5db21c4d8aef33176e628ea3c4e2.png?imageView&thumbnail=150x150&quality=75" 
      },
      {
        text1:"靠谱好物大盘点",
        text2:"闭着眼买都不会错",
        img1:"https://yanxuan-item.nosdn.127.net/3588ca21c954a4289e4c87c2e66ec7b7.png?imageView&thumbnail=150x150&quality=75",
        img2:"https://yanxuan-item.nosdn.127.net/0853a574159cd7c4dd277005a1909cb3.png?imageView&thumbnail=150x150&quality=75" 
      },
      {
        text1:"断货补单王",
        text2:"严选必买爆款",
        img1:"https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",
        img2:"https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" 
      },
    ]
  }
  render() {
    const { superList } = this.state;
    return (
      <div className="SuperValue">
        <div className="warper">
          <div className="main">
            <ul className="specialList">
              {
                superList.map((item,index)=>{
                  return (
                    <li className="specialItem1" key={index}>
                      <div className="wapper">
                        <div className="text">
                          <div className="top">
                            {item.text1}
                          </div>
                          <div className="bottom">
                            {item.text2}
                          </div>
                        </div>
                        <div className="img">
                          <img src={item.img1} className="left" />
                          <img src={item.img2} className="right" />
                        </div>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
