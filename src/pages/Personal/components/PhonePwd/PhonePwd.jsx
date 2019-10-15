import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl";
class PhonePwd extends Component {
  state = {
    errType: 0, //错误类型: 0没有错误,1手机号错误,2密码类型错误
    phone: "",
    pwd: ""
  };
  phoneChange = event => {
    const phone = event.target.value;
    this.setState({
      phone
    });
  };
  pwdChange = event => {
    const pwd = event.target.value;
    this.setState({
      pwd
    });
  };
  login = event => {
    event.preventDefault();
    const { phone, pwd } = this.state;
    let exp = /^1[3456789]\d{9}$/;
    let regPwd = /^([a-zA-Z]|[0-9]){6,20}$/;
    if (!exp.test(phone)) {
      this.setState({
        errType: 1
      });
      return;
    } else if (!regPwd.test(pwd)) {
      this.setState({
        errType: 2
      });
    } else {
      this.setState({
        errType: 0
      });
      console.log("发送手机验证码");
    }
  };

  clearPhone = () => {
    this.setState({
      phone: ""
    });
    this.refs.phone.value = "";
  };

  clearPwd = () => {
    this.setState({
      pwd: ""
    });
    this.refs.pwd.value = ""
  };

  render() {
    const { errType, pwd, phone } = this.state;
    return (
      <div className="PwdContainer">
        <div className="wrapper">
          <div className="header">
            <img
              src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
              alt="logo"
            />
          </div>
          <div className="center">
            <form>
              <div className="phone">
                <input
                  type="text"
                  placeholder="请输入手机号"
                  onChange={event => {
                    this.phoneChange(event);
                  }}
                  ref="phone"
                />
                {phone ? <i onClick={this.clearPhone}></i> : null}
              </div>
              <div className="pwd">
                <input
                  type="password"
                  placeholder="请输入密码"
                  onChange={event => {
                    this.pwdChange(event);
                  }}
                  ref="pwd"
                />
                {pwd ? <i onClick={this.clearPwd}></i> : null}
              </div>
              {errType !== 0 ? (
                <span className="reg">
                  {errType == 1 ? "请输入正确的手机号" : "密码格式错误"}
                </span>
              ) : null}
              <div className="forget">
                <div className="left">忘记密码?</div>
                <div className="right">短信快捷登录</div>
              </div>
              <div className="login">
                <button
                  onClick={event => {
                    this.login(event);
                  }}
                >
                  登录
                </button>
              </div>
            </form>
          </div>
          <div
            className="footer"
            onClick={() => {
              this.props.history.replace("/personal");
            }}
          >
            <span>其他登录方式</span>
            <i className="icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PhonePwd)
