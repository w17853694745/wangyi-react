import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { changeThingsType } from "../../../../redux/actions";
import { connect } from "react-redux";
import "./index.styl";
import BScroll from "better-scroll";
class Header extends Component {
  state = {
    // isFinds: true, //当前是不是发现组件
    tabList: [
      {
        name: "推荐"
      },
      {
        name: "好货内部价"
      },
      {
        name: "晒单"
      },
      {
        name: "选购指南"
      },
      {
        name: "回购榜"
      },
      {
        name: "达人"
      },
      {
        name: "HOME"
      }
    ],
    currIndex:0 //当前nav的下标
  };
  goRoute(route) {
    this.props.history.replace(route);
  }
  changeType = flag => {
    this.props.changeThingsType(flag)
    if (flag) {
      this.props.history.replace("/things/recommend");
    }else{
      this.props.history.replace("/things/selection");
    }
  };
  changeIndex(index){
    this.setState({
      currIndex:index
    })
  }

  componentDidMount(){
    const path = this.props.location.pathname;
    if (path === "/things/selection") {
      this.props.changeThingsType(false)
    } else {
      this.props.changeThingsType(true);
    }

    try {
      if (!this.bScroll) {
        this.bScroll = new BScroll(".wrapper-bottom", {
          click: true,
          scrollX: true,
          scrollY: false
        });
      } else {
        this.bScroll.refresh();
      }
    } catch (error) {
      console.log(error)
    }
  }

  //不能滑动,DOM没有渲染完毕?

  componentWillReceiveProps(nextValue){
    if (nextValue.isfind) {
      //如果切换速度太快,也会报错,是不是时机太早,DOM还没有渲染
      setTimeout(() => {
        new BScroll(this.refs.wrapperBottom, {
          click: true,
          scrollX: true,
          scrollY: false
        });
      }, 300);
    }
  }

  //可以滑动,但是每次点击也会触发

  // componentDidUpdate(){
  //   console.log(this.props.isfind)
  //   if (this.props.isfind) {
  //     new BScroll(this.refs.wrapperBottom, {
  //       click: true,
  //       scrollX: true,
  //       scrollY: false
  //     });
  //   }
  // }

  render() {
    const { tabList, currIndex } = this.state;
    const {isfind} = this.props
      return (
        <div className="Thingsheader">
          <div className="wrapper-header active">
            <div className="main">
              <div className="left">
                <a
                  href="javascip:"
                  onClick={() => {
                    this.goRoute("/home");
                  }}
                ></a>
              </div>
              <div className="center">
                <span
                  className={isfind ? "active" : ""}
                  onClick={() => {
                    this.changeType(true);
                  }}
                >
                  发现
                </span>
                <span
                  className={isfind ? "" : "active"}
                  onClick={() => {
                    this.changeType(false);
                  }}
                >
                  甄选家
                </span>
              </div>
              <div className="right">
                <i
                  className="search"
                  onClick={() => {
                    this.goRoute("/search");
                  }}
                ></i>
                <i
                  className="shopCar"
                  onClick={() => {
                    this.goRoute("/shopcar");
                  }}
                ></i>
              </div>
            </div>
          </div>
          {isfind ? (
            <div className="wrapper-bottom" ref="wrapperBottom" v-if="isFinds">
              <div className="main">
                {tabList.map((item, index) => {
                  return (
                    <div
                      className={
                        currIndex === index ? "main-item active" : "main-item"
                      }
                      onClick={() => {
                        this.changeIndex(index);
                      }}
                      key={index}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      );
  }
}
export default withRouter(
  connect(
    state => ({ isfind: state.isfind }),
    { changeThingsType }
  )(Header)
);
