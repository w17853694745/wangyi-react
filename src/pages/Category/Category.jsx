import React, { Component } from 'react'
import BScroll from "better-scroll";

import FooterNav from "../../components/FooterNav/index";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import "./index.styl";
class Category extends Component {
  state = {
    currIndex: 0
  }

  //点击改变currIndex
  changeCurrIndex(index){
    this.setState({
      currIndex:index
    });
  }
  
  componentDidMount(){
    if (this.Scroll) {
      this.Scroll.refresh();
    } else {
      this.Scroll = new BScroll(".left", {
        click: true,
        scrollY: true
      });
    }

    if (this.Scroll2) {
      this.Scroll2.refresh();
    } else {
      this.Scroll2 = new BScroll(".right", {
        click: true,
        scrollY: true
      });
    }
  }

  render() {
    const { categoryData } = this.props;
    const {currIndex} = this.state
    return (
      <div className="Category">
        <Header />
        <div className="wrapper">
          <div className="left">
            <ul className="navList">
              {categoryData &&
                categoryData.map((item, index) => {
                  return (
                    <li className={currIndex == index?"navItem active":"navItem"} key={index} onClick = {()=>{this.changeCurrIndex(index)}}>
                      {item.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="right" v-if="categoryData[currIndex]">
            <div className="content">
              <div className="header">
                <img src={categoryData[currIndex]&&categoryData[currIndex].wapBannerUrl} alt="" />
              </div>
              <div className="main">
                <ul className="mainList">
                  {categoryData[currIndex] &&
                    categoryData[currIndex].subCateList.map((item2, index) => {
                      return (
                        <li className="mainItem" key={index}>
                          <div className="img">
                            <img src={item2.bannerUrl} alt="" />
                          </div>
                          <div className="text">
                            <span>{item2.name}</span>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterNav/>            
      </div>
    );
  }
}
export default connect(
  state=>({
    categoryData:state.categoryData
  })
)(Category);
