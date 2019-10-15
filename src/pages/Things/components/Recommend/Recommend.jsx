import React, { Component } from 'react'
import { connect } from "react-redux";
import { getMoreRecommendData } from "../../../../redux/actions";
import "./index.styl";

import Code0Show from "./components/Code0Show/Code0Show";
import Code2Show from "./components/Code2Show/Code2Show";
import Code7Show from "./components/Code7Show/Code7Show";
import Code11Show from "./components/Code11Show/Code11Show";
import BScroll from "better-scroll";
class Recommend extends Component {
  state = {
    moreDataPage:1
  }

  async componentDidMount() {
    try {
      if (this.recScroll) {
        this.recScroll.refresh();
      } else {
        this.recScroll = new BScroll(".recommend", {
          click: true,
          probeType: 2,
          scrollX: false,
          scrollY: true,
          bounce: false,
          pullUpLoad: true
        });
        this.recScroll.on("pullingUp", async () => {
          let {moreDataPage} = this.state
          let DataPage = moreDataPage+1;
          this.setState({
            moreDataPage: DataPage
          });
          await this.props.getMoreRecommendData({
            page: this.state.moreDataPage,
            size: 5
          });
          this.recScroll.finishPullUp();
        });
      }
    } catch (e) {}
    
    await this.props.getMoreRecommendData({ page: 1, size: 5 });
  }
  render() {
    const { recommendList, moreRecommendData } = this.props;
    // console.log(moreRecommendData.result);
    return (
      <div className="recommend">
        <div className="wrapper" ref="wrapper">
          {recommendList &&
            recommendList.map((recommend, index) => {
              return (
                <ul className="recommendList" key={index}>
                  {recommend.topics &&
                    recommend.topics.map((topic, index) => {
                      return (
                        <li className="recommendItem" key={index}>
                          {topic.type === 0 || topic.type === 10 ? (
                            <Code0Show topic={topic} />
                          ) : topic.type == 2 ? (
                            <Code2Show topic={topic} />
                          ) : topic.type === 7 ? (
                            <Code7Show topic={topic} />
                          ) : topic.type === 11 || topic.type === 12 ? (
                            <Code11Show topic={topic} />
                          ) : null}
                        </li>
                      );
                    })}
                </ul>
              );
            })}

          {moreRecommendData.result &&
            moreRecommendData.result.map((recommend, index) => {
              return (
                <ul className="recommendList" key={index + Date.now()}>
                  {recommend.topics &&
                    recommend.topics.map((topic, index) => {
                      return (
                        <li className="recommendItem" key={index + Date.now()}>
                          {topic.type === 0 || topic.type === 10 ? (
                            <Code0Show topic={topic} />
                          ) : topic.type == 2 ? (
                            <Code2Show topic={topic} />
                          ) : topic.type === 7 ? (
                            <Code7Show topic={topic} />
                          ) : topic.type === 11 || topic.type === 12 ? (
                            <Code11Show topic={topic} />
                          ) : null}
                        </li>
                      );
                    })}
                </ul>
              );
            })}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    recommendList: state.recommendList,
    moreRecommendData: state.moreRecommendData
  }),
  { getMoreRecommendData }
)(Recommend);
