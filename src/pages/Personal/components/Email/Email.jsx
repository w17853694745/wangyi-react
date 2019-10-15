import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class Email extends Component {
  state = {
    errType: 0, //验证的错误类型,0没有错误,1邮箱错误,2密码错误
    code: "",
    pwd:""
  };
  //其他方式登录
  changeRoute = () => {
    this.props.history.replace("/personal");
  };
  //登录,验证输入内容
  login = () => {
    const code = this.refs.code.value;
    const pwd = this.refs.pwd.value;
    //邮箱验证
    let regEmail = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    //密码验证
    let regPwd = /^([a-zA-Z]|[0-9]){6,20}$/;
    if (!regEmail.test(code)) {
      this.setState({
        errType: 1
      });
      return;
    } else if (!regPwd.test(pwd)) {
      this.setState({
        errType: 2
      });
      return;
    }
    console.log("登录成功");
    this.setState({
      errType: 0
    });
  };
  //输入邮箱
  codeChange = event => {
    const code = event.target.value;
    this.setState({
      code
    });
  };
  //输入密码
  pwdChange = event => {
    const pwd = event.target.value;
    this.setState({
      pwd
    });
  };
  //清除输入的内容
  clearContent=(flag)=>{
    console.log(flag)
    if (flag === "pwd") {
      this.setState({
        pwd: ""
      });
      this.refs.pwd.value = ""
    } else if (flag === "code") {
      this.setState({
        code: ""
      });
      this.refs.code.value = "";
    }
  }

  render() {
    const { errType, code, pwd} = this.state;

    return (
      <div className="Emailcontainer">
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
              <div className="code">
                <input type="text" placeholder="邮箱账号" ref="code" onInput={event => {this.codeChange(event);}}/>
                {code ? <i className="icon" onClick={()=>{this.clearContent("code")}}></i> : null}
              </div>
              <div className="password">
                <input type="password" placeholder="密码" ref="pwd" onInput={event => {this.pwdChange(event);}}/>
                {pwd ? <i className="icon" onClick={()=>{this.clearContent("pwd")}}></i> : null}
              </div>
            </div>
            {errType === 0 ? null : (
              <div className="Verification" v-if="errType!==0">
                <span>{errType === 1 ? "邮箱格式错误" : "密码格式错误"}</span>
              </div>
            )}
            <div className="pwd">
              <span className="problem">注册账号</span>
              <span className="usepwd">忘记密码</span>
            </div>
            <div className="login" onClick={this.login}>
              登录
            </div>
          </div>
          <div className="footer">
            <div className="other" onClick={this.changeRoute}>
              <a href="javascrip:">其他登录方式</a>
              <i className="icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Email);