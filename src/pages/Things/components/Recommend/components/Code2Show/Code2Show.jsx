import React, { Component } from 'react'
import "./index.styl";
export default class Code2Show extends Component {
  convert = ()=>{
    let num = this.props.topic.readCount;
    if (num >= 10000) {
      num = Math.floor(Math.round(num / 1000) / 10) + "w";
    } else if (num >= 1000) {
      num = Math.floor(Math.round(num / 1000) / 10) + "k";
    }
    return num;
  }
  render() {
    const {topic} = this.props
    return (
      <div className="Code2Show">
        <div className="wrapper">
          <div className="left">
            <div className="header">
              <div className="avatar">
                <img src={topic.avatar} alt="img" />
              </div>
              <div className="name">
                <span>{topic.nikename}</span>
              </div>
            </div>
            <div className="text">
              <span>{topic.title}</span>
            </div>
            <div className="info">
              <span>{topic.subTitle}</span>
            </div>
            <div className="look">
              <i className="icon"></i>
              <span>{this.convert()}人看过</span>
            </div>
          </div>
          <div className="right">
            <img src={topic.picUrl} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}
