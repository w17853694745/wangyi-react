import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class Phone extends Component {
  state = {
    errType: 0, //错误类型:0没有错误,1手机号错误,2验证码错误
    phone: "",
    code: ""
  };
  //选择其他登录方式
  changeType = () => {
    this.props.history.replace("/personal");
  };
  //输入手机号,实时保存数据
  changePhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  //输入验证码,保存数据
  changeCode = event => {
    this.setState({
      code: event.target.value
    });
  };
  //获取验证码验证
  ObtainCode=()=>{
    let { phone } = this.state;
    let exp = /^1[3456789]\d{9}$/;
    if (!exp.test(phone)) {
      this.setState({
        errType : 1
      })
      return;
    } else {
      console.log("发送手机验证码");
      this.setState({
        errType: 0
      });
    }
  }
  //登录验证
  login = () => {
    let { code } = this.state;
    //如果不是正常状态,或者验证码长度不等于6,返回错误
    if (code.length !== 6) {
      this.setState({
        errType: 2
      });
    } else {
      this.setState({
        errType: 0
      });
    }
    //登录
    if (this.errType == 0 && code.length == 6) {
      console.log("登录");
      this.setState({
        errType: 0
      });
    }
  };
  //清空手机输入
  clearPhone=()=>{
    this.setState({
      phone:""
    })
    this.refs.phone.value = ""
  }
  render() {
    const { errType, phone, code } = this.state;
    return (
      <div className="Phonecontainer">
        <div className="wrapper">
          <div className="header">
            <div className="img">
              <img
                src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
                alt=""
              />
            </div>
          </div>
          <div className="center">
            <div className="inputs">
              <div className="phone">
                <input
                  type="text"
                  placeholder="请输入手机号"
                  onInput={event => {
                    this.changePhone(event);
                  }}
                  ref="phone"
                />
                {phone ? <i className="icon" onClick={this.clearPhone}></i> : null}
              </div>
              <div className="code">
                <input
                  type="text"
                  placeholder="请输入短信验证码"
                  onInput={event => {
                    this.changeCode(event);
                  }}
                />
                <span className="obtain" onClick={this.ObtainCode}>
                  获取验证码
                </span>
              </div>
            </div>
            {errType == 0 ? null : (
              <div className="Verification">
                <span>
                  {errType == 1 ? "请输入正确的手机号" : "验证码格式错误"}
                </span>
              </div>
            )}
            <div className="pwd">
              <span className="problem">遇到问题?</span>
              <span className="usepwd" onClick={()=>{this.props.history.push("/personal/phonepwd")}}>使用密码验证登录</span>
            </div>
            <div className="login" onClick={this.login}>
              登录
            </div>
            <div className="ok">
              <span className="cheack">
                <input id="allChecked" type="checkbox" />
              </span>
              <span> 我同意 </span>
              <span className="color">《服务条款》</span>
              <span> 和 </span>
              <span className="color">《网易隐私政策》</span>
            </div>
          </div>
          <div className="footer">
            <div className="other" onClick={this.changeType}>
              <a>其他登录方式</a>
              <i className="icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Phone);