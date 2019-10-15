import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.styl'

class FooterNav extends Component {
  
  changeRoute(route){
    this.props.history.replace(route)
  }
  render() {
    return (
      <footer id="footer_box">
        <ul className="footer_nav">
          <li className={this.props.location.pathname==="/home"?"item active":"item"} onClick={()=>{this.changeRoute("/home")}}>
            <i className={this.props.location.pathname==="/home"?"u-icon u-icon-tabBar-index-active":"u-icon u-icon-tabBar-index"}></i>
            <span className="text">首页</span>
          </li>
          <li className={this.props.location.pathname==="/category"?"item active":"item"} onClick={()=>{this.changeRoute("/category")}}>
            <i className={this.props.location.pathname==="/category"?"u-icon u-icon-tabBar-cate-active":"u-icon u-icon-tabBar-cate"}></i>
            <span className="text">分类</span>
          </li>
          <li className={this.props.location.pathname==="/things/recommend"||this.props.location.pathname==="/things/selection"?"item active":"item"} onClick={()=>{this.changeRoute("/things")}}>
            <i className={this.props.location.pathname==="/things/recommend"||this.props.location.pathname==="/things/selection"?"u-icon u-icon-tabBar-topic-active":"u-icon u-icon-tabBar-topic"}></i>
            <span className="text">识物</span>
          </li>
          <li className={this.props.location.pathname==="/shopcar"?"item active":"item"} onClick={()=>{this.changeRoute("/shopcar")}}>
            <i className={this.props.location.pathname==="/shopcar"?"u-icon u-icon-tabBar-cart-active":"u-icon u-icon-tabBar-cart"}></i>
            <span className="text">购物车</span>
          </li>
          <li className={this.props.location.pathname==="/personal"?"item active":"item"} onClick={()=>{this.changeRoute("/personal")}}>
            <i className={this.props.location.pathname==="/personal"?"u-icon u-icon-tabBar-ucenter-active":"u-icon u-icon-tabBar-ucenter"}></i>
            <span className="text">个人</span>
          </li>
        </ul>
      </footer>
    );
  }
}
export default withRouter(FooterNav)