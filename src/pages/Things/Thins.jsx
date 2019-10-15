import React, { Component } from 'react'
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.styl";
import FooterNav from "../../components/FooterNav";
import Header from "./components/Header/Header";

//路由组件
import Recommend from "./components/Recommend/Recommend";
import Selection from "./components/Selection/Selection";

class Thins extends Component {
  render() {
    const {isfind} = this.props
    return (
      <div className="Thingscontainer">
        <Header />
        {
          isfind?(
            <div className="splits"></div>
          )
          :
          null
        }
        <Switch>
          <Route path="/things/selection" component={Selection}></Route>
          <Route path="/things/recommend" component={Recommend}></Route>
          <Redirect path="/things" to="/things/recommend"></Redirect>
        </Switch>
        <FooterNav />
      </div>
    );
  }
}
export default connect(
  state=>({
    isfind:state.isfind
  })
)(Thins)
