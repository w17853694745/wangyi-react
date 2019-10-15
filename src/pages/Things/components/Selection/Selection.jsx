import React, { Component } from 'react'
import { connect } from "react-redux";
import BScroll from "better-scroll";
import { NavLink } from "react-router-dom";

import { getHeaderData, getThreeTypeData } from "../../../../redux/actions";
import "./index.styl";
import IsCollectionShow from "./components/IsCollectionShow/IsCollectionShow"
import NotCollectionShow from "./components/NotCollectionShow/NotCollectionShow";

class Selection extends Component {
  state = {
    tabId: 7,
    type: 1,
    moreDataPage: 1
  };

  changeroute=(flag)=>{
    console.log(flag)
  }

  async componentDidMount() {
    await this.props.getHeaderData();
    await this.props.getThreeTypeData({
      page: this.state.moreDataPage,
      size: 5,
      type: this.state.type
    });
    try {
      if (this.topScroll) {
        this.topScroll.refresh();
      } else {
        this.topScroll = new BScroll(".things-container", {
          click: true,
          scrollX: true,
          scrollY: false
        });
      }
      if (this.cScroll) {
        this.cScroll.refresh();
      } else {
        this.cScroll = new BScroll(".selection", {
          click: true,
          probeType: 2,
          scrollX: false,
          scrollY: true,
          bounce: false, // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
          //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
          //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
          pullUpLoad: true
        });
        this.cScroll.on("pullingUp", async () => {
          const { moreDataPage } = this.state;
          let DataPage = moreDataPage + 1;
          this.setState({
            moreDataPage: DataPage
          });
          this.moreDataPage++;
          await this.props.getThreeTypeData({
            page: this.state.moreDataPage,
            size: 5,
            type: this.state.type
          });
          this.cScroll.finishPullUp(); // 可以多次执行上拉刷新
        });
      }
      this.cScroll.hasVerticalScroll = true; // 开启： 使得数据不足时也可以拉动
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { headerData, threeTypeData } = this.props;
    // console.log(threeTypeData.topicList);
    return (
      <div className="selection">
        <div className="selectionContainer">
          <div className="header">
            <div className="top">
              <span>让生活更好的N种方式</span>
            </div>
            <div className="bottom">
              <span>可爱值max的严选萌物</span>
            </div>
          </div>

          <div className="swiper-container things-container">
            <div className="swiper-wrapper things-wrapper">
              {headerData.length > 1 &&
                headerData.map((item, index) => {
                  return (
                    <span className="swiper-slide things-slide" key={index}>
                      <img src={item.banner.picUrl} alt="img" />
                    </span>
                  );
                })}
            </div>
          </div>

          <div className="wrapper">
            <div className="header">
              <span>TA们的严选生活</span>
            </div>
            <div className="change">
              {/* <span className="new active">最新</span>
              <span className="hot">本月最热</span>
              <span className="compilation">晒单合辑</span> */}
              <NavLink
                to="/things/selection"
                className="link actived"
                onClick={() => {
                  this.changeroute("new");
                }}
              >
                最新
              </NavLink>
              <NavLink
                to="/things/selection"
                className="link"
                onClick={() => {
                  this.changeroute("hot");
                }}
              >
                本月最热
              </NavLink>
              <NavLink
                to="/things/selection"
                className="link"
                onClick={() => {
                  this.changeroute("compilation");
                }}
              >
                晒单合辑
              </NavLink>
            </div>
            <div className="content_wrapper">
              <ul className="content_show clearfix" v-if="threeTypeData">
                {threeTypeData.topicList.length > 0 &&
                  threeTypeData.topicList.map((topic, index) => {
                    return index % 2 == 0 ? (
                      <li key={index}>
                        {!topic.isCollection ? (
                          <NotCollectionShow topic={topic}></NotCollectionShow>
                        ) : (
                          <IsCollectionShow topic={topic}></IsCollectionShow>
                        )}
                      </li>
                    ) : null;
                  })}
              </ul>

              <ul v-if="threeTypeData" className="content_show clearfix">
                {threeTypeData.topicList.map((topic, index) => {
                  return index % 2 == 1 ? (
                    <li key={index}>
                      {topic.isCollection ? (
                        <NotCollectionShow topic={topic}></NotCollectionShow>
                      ) : (
                        <IsCollectionShow topic={topic}></IsCollectionShow>
                      )}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    headerData: state.headerData,
    threeTypeData: state.threeTypeData
  }),
  {
    getHeaderData,
    getThreeTypeData
  }
)(Selection);