import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Choice from "./components/Choice/Choice";
import Email from "./components/Email/Email";
import Phone from "./components/Phone/Phone";
import PhonePwd from "./components/PhonePwd/PhonePwd";
export default class Personal extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/personal/email" component={Email}></Route>
          <Route path="/personal/phone" component={Phone}></Route>
          <Route path="/personal/phonepwd" component={PhonePwd}></Route>
          <Route path="/personal" component={Choice}></Route>
        </Switch>
      </div>
    );
  }
}
