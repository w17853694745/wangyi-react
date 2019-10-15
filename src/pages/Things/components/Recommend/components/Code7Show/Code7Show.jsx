import React, { Component } from 'react'
import "./index.styl";
import { tsImportEqualsDeclaration } from '@babel/types';
export default class Code7Show extends Component {

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
      <div className="Code7Show" v-if="topic.itemList.length>7">
        <div className="wrapper">
          <div className="text">
            <span>{topic.title}</span>
          </div>
          <div className="info">
            <span>{topic.subTitle}</span>
          </div>
          <div className="main">
            {
              topic.itemList.map((item,index)=>{
                return (
                  <div className="img" key={index}>
                    <img src={item.itemUrl} alt="img" />
                  </div>
                );
              })
            }
            
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
