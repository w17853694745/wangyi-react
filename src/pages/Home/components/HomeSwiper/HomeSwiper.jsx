import React, { Component } from 'react'
import Swiper from "swiper";
import "./index.styl";
import "swiper/css/swiper.min.css";

export default class HomeSwiper extends Component {
  state={
    swiperImg:[
      "https://yanxuan.nosdn.127.net/766890ad54020808e824982e2751b717.jpg?imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/1cdfc1b7ef19d9398c6a9c7b55683ba5.jpg?imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/be2e77d1e49b5540f86926d48f289ff9.jpg?imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0",
      'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0'
    ]
  }

  componentDidMount(){
    new Swiper(".home-swiper", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }

  render() {
    const {swiperImg} = this.state
    return (
      <div className="swiper-container home-swiper">
        <div className="swiper-wrapper home-wrapper">
          {
            swiperImg.map((item,index)=>{
              return (
                <div className="swiper-slide home-slide" key={index}>
                  <img src={item} className="img" />
                </div>
              );
            })
          }
          
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
