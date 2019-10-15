import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class Header extends Component {
  render() {
    return (
      <div className="cateHeader">
        <div className="wrapperHeader">
          <div className="main">
            <div className="center" onClick={()=>{this.props.history.replace("/search")}}>
              <i className="icon"></i>
              <span className="text">搜索商品, 共23047款好物</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
