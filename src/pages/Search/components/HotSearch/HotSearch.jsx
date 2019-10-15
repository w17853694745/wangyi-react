import React, { Component } from 'react'
import { connect } from "react-redux";
import _ from "lodash";
import "./index.styl";
class HotSearch extends Component {
  seacherDataList = ()=> {
    let arr = this.props.seacherData;
    arr = _.shuffle(arr);
    arr = arr.splice(0, 9);    
    return arr;
  }

  render() {
    const { seacherData } = this.props;
    return (
      <div className="HotSearchcontainer">
        <div className="HotSearchwrapper">
          <div className="header">
            <span>热门搜索</span>
          </div>
          <div className="main">
            {seacherData &&
              this.seacherDataList().map((item, index) => {
                return (
                  <div className={item.hidden!==0?"main-item active":"main-item"} key={index}>
                    {item.keyword}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state=>({
    seacherData:state.seacherData
  })
)(HotSearch);
