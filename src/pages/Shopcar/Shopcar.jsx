import React, { Component } from 'react'

import "./index.styl";
import FooterNav from "../../components/FooterNav";
import Header from "./components/Header/Header";
import Service from "./components/Service/Service";
import Main from "./components/Main/Main";
export default class Shopcar extends Component {
  render() {
    return (
      <div className="shopcar">
        <Header/>
        <Service/>
        <Main/>
        <FooterNav/>
      </div>
    )
  }
}
