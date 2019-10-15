import React, { Component } from 'react'
import { connect } from "react-redux";
import "./index.styl";
class DataList extends Component {
  render() {
    const {seacherList} = this.props
    return (
      <div className="dataList">
        <div className="DataListwrapper">
          {
            seacherList&&seacherList.map((item,index)=>{
              return (
                <div className="item" key={index}>
                  <span>{item}</span>
                </div>
              );
            })
          }
        </div> 
      </div>
    )
  }
}
export default connect(
  state=>({
    seacherList:state.seacherList
  })
)(DataList);
