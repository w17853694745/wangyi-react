import React, { Component } from 'react'
import "./index.styl";
export default class NotCollectionShow extends Component {
  render() {
    const {topic} = this.props
    return (
      <div className="not_is_box">
        <img src={topic.bannerInfo.picUrl} alt="New" />
        <p className="line_two_point">{topic.content}</p>
        <div>
          <div className="left_info">
            <img src={topic.avatar} alt="avatar" />
            <span>{topic.nickName}</span>
          </div>
          <div className="right_info">
            <span className="iconfont icon-dianzan"></span>
            <span>{topic.supportNum}</span>
          </div>
        </div>
      </div>
    );
  }
}
