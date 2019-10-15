import React, { Component } from 'react'
import "./index.styl";
export default class Code11Show extends Component {
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
      <div className="Code11Show" v-if="topic.avatar">
        <div className="wrapper">
          <div className="text">
            <span>{topic.title}</span>
          </div>
          <div className="img">
            <img src={topic.picUrl} alt="img" />
          </div>
          <div className="look">
            <i className="icon"></i>
            <span>{this.convert()}人看过</span>
          </div>
        </div>
      </div>
    );
  }
}
