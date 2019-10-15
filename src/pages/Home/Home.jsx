import React, { Component } from 'react'
import "./index.styl"

import FooterNav from "../../components/FooterNav";
import HeaderNav from "../../components/HeaderNav/index";
import HomeSwiper from "./components/HomeSwiper/HomeSwiper";
import ServicePolicy from "./components/ServicePolicy/ServicePolicy";
import CategoryList from "./components/CategoryList/CategoryList";
import NewPeople from "./components/NewPeople/NewPeople";
import Special from "./components/Special/Special";
import SellWell from "./components/SellWell/SellWell";
import Popularity from "./components/Popularity/Popularity";
import LimitedTime from "./components/LimitedTime/LimitedTime";
import NewProducts from "./components/NewProducts/NewProducts";
import SuperValue from "./components/SuperValue/SuperValue";
import BottomSwiper from "./components/BottomSwiper/BottomSwiper";
import FooterInfo from "./components/FooterInfo/FooterInfo";

export default class Home extends Component {
  state={
    BottomList:[
      {
        imgBig:"https://yanxuan.nosdn.127.net/1752f2c923663900acbedd688a90213b.jpg?imageView&thumbnail=750x0&quality=75",
        categoryList:[
          {
            img:"https://yanxuan-item.nosdn.127.net/d3d966a23f335df1bb02cdd17c63d97e.png?imageView&quality=65&thumbnail=330x330",
            text:"秋冬上新 男式基础修身牛仔裤",
            price:"¥99.9",
            choice:["2","色","可","选"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/17c3596d257753108d1d471b8ea4d385.png?imageView&quality=65&thumbnail=330x330",
            text:"男式咖啡碳+5℃保暖内衣（上衣/裤子）",
            price:"¥169"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/addee9ec84296ecac21d4993fd93e527.png?imageView&quality=65&thumbnail=330x330",
            text:"Free Cross女式四面弹九分牛仔裤",
            price:"¥138",
            oldPrice:"229",
            info:"秋冬特惠"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/7b5815dba28684d89601e0643e2a1b56.png?imageView&quality=65&thumbnail=330x330",
            text:"FreeCross男式修身四面弹牛仔裤",
            price:"¥229",
            choice:["3","色","可","选"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/733424cc34c40dea3b05557c86ac7ada.png?imageView&quality=65&thumbnail=330x330",
            text:"男式工装水洗束脚九分裤",
            price:"¥229",
            choice:["6","色","可","选"]

          },
          {
            img:"https://yanxuan-item.nosdn.127.net/c9a1ba4ab3875b78d1ef0ef1b3a4550c.png?imageView&quality=65&thumbnail=330x330",
            text:"秋冬上新 男式HEATEASE轻保暖（上衣/裤子）",
            price:"¥99"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/236a6fe4f6c1761f43cccccc08381a1f.png?imageView&quality=65&thumbnail=330x330",
            text:"秋冬上新 Yessing 女式针织圆领卫衣",
            price:"¥97.5",
            oldPrice:"139",
            choice:["3","色","可","选"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/a00da30f95eb63b40a04a87a22e90532.png?imageView&quality=65&thumbnail=330x330",
            text:"秋冬上新 可机洗系列 女式V领100%羊毛衫",
            price:"¥209",
            choice:["4","色","可","选"]
          },
          {
            code:2,
            text:"查看更多",
            img:"//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-moduleArr-b9a6127164.png"
          }
        ]
      },
      {
        imgBig:"https://yanxuan.nosdn.127.net/53af8112a4fc762e160d8fbc6aa0fc01.jpg?imageView&thumbnail=750x0&quality=75",
        categoryList:[
          {
            img:"https://yanxuan-item.nosdn.127.net/4e3ef93af4524050ac4eec438524b550.png?imageView&quality=65&thumbnail=330x330",
            text:"镁离子滤芯3+1 双效功能",
            price:"¥169",
            choice:["奥","地","利","制","造"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/4911f0a2959a3f87d3b8cc69f6670db6.png?imageView&quality=65&thumbnail=330x330",
            text:"德国制造 镁离子净水壶",
            price:"¥189",
            choice:["德","国","制","造"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/4a24b083c08e6e7bb7684486cbf36979.png?imageView&quality=65&thumbnail=330x330",
            text:"老冰糖 400克",
            price:"¥18",
            info:"每满99减12",
            choice:["2","个","规","格"]
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/1090ed6d45e2737c577402755ff83cd8.png?imageView&quality=65&thumbnail=330x330",
            text:"再生纤维抹布",
            price:"¥19.9",
            info:"超低价"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/8cab8087306ee26d8ef22cf91e8ebaf9.png?imageView&quality=65&thumbnail=330x330",
            text:"红糖姜茶 12克*10条",
            price:"¥16",
            info:"每满99减12"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/98a9713b513603ed36d6ba946dfa632a.png?imageView&quality=65&thumbnail=330x330",
            text:"双底面淘米洗菜篮",
            price:"¥29.9"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/9e9e1a6fd42242050e27841673a4a41d.png?imageView&quality=65&thumbnail=330x330",
            text:"醉美人红茶 50克",
            price:"¥85",
            info:"每满99减12"
          },
          {
            img:"https://yanxuan-item.nosdn.127.net/da2ebddce902bdc652260a1789afc13a.png?imageView&quality=65&thumbnail=330x330",
            text:"特型黄酒 500毫升",
            price:"¥68",
            info:"每满99减12"
          },
          {
            code:2,
            text:"查看更多",
            img:"//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-moduleArr-b9a6127164.png"
          }
        ]
      }
    ]
      
  }
  render() {
    const {BottomList} = this.state
    return (
      <div className="home">
        <HeaderNav />
        <HomeSwiper />
        <ServicePolicy />
        <CategoryList />
        <div className="split"></div>
        <NewPeople />
        <div className="split"></div>
        <Special />
        <div className="split"></div>
        <SellWell />
        <div className="split"></div>
        <Popularity />
        <div className="split"></div>
        <LimitedTime />
        <div className="split"></div>
        <NewProducts />
        <div className="split"></div>
        <SuperValue />
        <div className="split"></div>
        {BottomList.map((item, index) => {
          return <BottomSwiper Bottom={item} key={index} />;
        })}
        <FooterInfo />
        <FooterNav/>
      </div>
    );
  }
}
