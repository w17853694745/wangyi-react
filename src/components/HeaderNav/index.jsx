import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./index.styl"
import BScroll from "better-scroll";

class HeaderNav extends Component {
  state = {
    shoppingList: [
      "推荐",
      "居家生活",
      "服饰鞋包",
      "美食酒水",
      "个户清洁",
      "母婴亲子",
      "运动旅行",
      "数码家电",
      "全球特色"
    ],
    isOpen: false,
    curA: 0,
    lefts: []
  };

  // 改变active下标
  changeIndex(index) {
    this.setState({
      curA: index
    });
  }
  // 根据点击的元素,使导航元素固定在最左边
  clickItem = index => {
    if (index < 6) {
      const top = this.state.lefts[index];
      // 让右侧列表滑动到对应的位置
      this.bScroll.scrollTo(-top, 0, 300);
    }
  };
  //改变展开和关闭的函数
  changeOpen = () => {
    let isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    });
  };
  //初始化每个nav的长度的数组
  initTops = () => {
    const lefts = [];
    let top = 0;
    lefts.push(top);
    // 遍历所有右侧分类li
    const lis = this.refs.rightUl.children;
    Array.prototype.slice.call(lis).forEach(li => {
      top += li.clientWidth;
      lefts.push(top);
    });
    // 更新lefts数据
    this.setState({
      lefts
    });
  };

  //点击遮罩禁止滑屏
  NoClick = event => {
    event.preventDefault();
    this.setState({
      isOpen:false
    })
  };

  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(".left_ul_box", {
        click: true,
        scrollX: true
      });
    } else {
      this.bScroll.refresh();
    }

    //初始加载所有长度
    this.initTops();
  }

  render() {
    const { shoppingList, isOpen, curA } = this.state;
    return (
      <header className="header_box">
        <div className="header_search">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" />

          <div
            className="search_box"
            onClick={() => {
              this.props.history.replace("/search");
            }}
          >
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" />
            <span className="placeholder">搜索商品，共23152款好物</span>
          </div>

          <span
            className="login_btn"
            onClick={() => {
              this.props.history.replace("/personal");
            }}
          >
            登录
          </span>
        </div>

        <div className="header_nav">
          <div className="left_ul_box">
            <ul className="left_ul clearfix" ref="rightUl">
              {shoppingList.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      this.changeIndex(index);
                      this.clickItem(index);
                    }}
                  >
                    <a
                      href="javascrip:"
                      className={curA == index ? "active" : ""}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right_span">
            <span className="linear"></span>
            <div className="img_box" onClick={this.changeOpen}>
              <img
                className="isOpen"
                src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
              />
            </div>
          </div>
          {isOpen ? (
            <div className="all_nav_box">
              <p>全部频道</p>
              <ul className="all_nav clearfix" ref="allNav">
                {shoppingList.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={curA == index ? "active" : ""}
                      onClick={() => {
                        this.changeIndex(index);
                        this.clickItem(index);
                      }}
                    >
                      <a href="javascrip:">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
        {isOpen ? (
          <div
            className="mask"
            onClick={event => {
              this.NoClick(event);
            }}
          ></div>
        ) : null}
      </header>
    );
  }
}
export default withRouter(HeaderNav);
