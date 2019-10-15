import React, { Component } from 'react'
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import "./index.styl";
export default class BottomSwiper extends Component {
  static propTypes={
    Bottom:PropTypes.object
  }
  componentDidMount(){
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.refs.container, {
        click: true,
        scrollX: true
      });
    } else {
      this.bScroll.refresh();
    }
  }
  render() {
    const {Bottom} = this.props
    // console.log(Bottom.categoryList[0].choice);
    return (
      <div className="BottomSwiper">
        <div className="wapper">
          <div className="bottomItem">
            <a href="javascrip:">
              <img src={Bottom.imgBig} alt="" />
            </a>
            <div className="swiper">
              <div className="scoll-container" ref="container">
                <ul className="scoll-wrapper">
                  {Bottom.categoryList.map((item, index) => {
                    if (item.code!==2) {
                      return (
                        <li className="scoll-slide" key={index}>
                          <div className="item">
                            <div className="img">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="text">
                              <span>{item.text}</span>
                            </div>
                            <div className="price">
                              <span>{item.price}</span>
                            </div>
                            <div className="info">
                              <p>{item.info}</p>
                            </div>
                            <div className="choice">
                              {item.choice
                                ? item.choice.map((item2, index) => {
                                    return (
                                      <div className="text" key={index}>
                                        {item2}
                                      </div>
                                    );
                                  })
                                : ""}
                            </div>
                          </div>
                        </li>
                      );
                    }else{
                      return (
                        <li className="scoll-slide" key={index}>
                          <div className="more">
                            <span>查看更多</span>
                            <img src="item2.img" alt=""/>
                          </div>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="split"></div>
      </div>
    );
  }
}
