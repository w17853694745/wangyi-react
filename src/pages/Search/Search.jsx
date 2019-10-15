import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSeacherData, getSeacherList } from "../../redux/actions";

import "./index.styl";
import HotSearch from "./components/HotSearch/HotSearch";
import DataList from "./components/DataList/DataList";
class Search extends Component {
  initInput = React.createRef()
  state = {
    inputValue:""
  }
  //绑定输入监听
  inputChange = (event)=>{
    const value = event.target.value;
    this.setState({
      inputValue:value
    });
    const time = Date.now()
    if (this.timer-time>0) {
      return 
    }
    this.timer = time+1000
    this.props.getSeacherList(value)
  }
  //清除输入的内容
  clearInput = ()=>{
    this.initInput.current.value = ""
    this.setState({
      inputValue : ""
    })
  }
  //右边的X号是否显示
  icon2 = ()=>{
    const {inputValue} = this.state
    if (inputValue) {
      return <i className="icon2" onClick={this.clearInput}></i>;
    }else{
      return null
    }
  }
  //取消搜索,返回home
  cancel=()=>{
    this.props.history.replace("/home")
  }

  componentDidMount(){
    this.props.getSeacherData()
  }
  render() {
    const {inputValue} = this.state
    return (
      <div className="Seachercontainer active">
        <div className="wrapper">
          <div className="left">
            <i className="icon"></i>
            <input type="text" placeholder="搜索更多好物" onChange = {(event)=>{this.inputChange(event)}} ref={this.initInput}/>
            {this.icon2()}
          </div>
          <div className="right">
            <span onClick={this.cancel}>取消</span>
          </div>
        </div>
        {
          !inputValue?
          (<HotSearch v-if="!inputValue.length"/>)
          :
          (<DataList v-if="inputValue.length"/>)
        }
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => ({
      seacherData: state.seacherData,
      seacherList: state.seacherList
    }),
    {
      getSeacherData,
      getSeacherList
    }
  )(Search)
);
