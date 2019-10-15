import React, { Component } from 'react'
import "./index.styl";
export default class IsCollectionShow extends Component {
  render() {
    const {topic} = this.props
    return (
      <div className="is_collection_box">
        <div className="pic_show">
          <img src={topic.bannerInfo.picUrl} alt="New" />
        </div>
        <p className="title ellipsis">{topic.content}</p>
        <p className="subtitle ellipsis">{topic.nickName}</p>
      </div>
    );
  }
}
