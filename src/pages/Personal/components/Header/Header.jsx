import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class Header extends Component {
  changeRoute(route){
    this.props.history.replace(route)
  }
  render() {
    return (
      <div className="Headercontainer">
        <div className="wrapper">
          <div className="main">
            <div className="left">
              <a href="javascip:" onClick={()=>{this.changeRoute("/home")}}>
              </a>
            </div>
            <div className="center">
              <i></i>
            </div>
            <div className="right">
              <i className="search" onClick={()=>{this.changeRoute("/search")}}>

              </i>
              <i className="shopCar" onClick={()=>{this.changeRoute("/shopcar")}}>

              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header);
