import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

//获取category数据
import {
  getCategoryData,
  getDropDownData
} from './redux/actions.js'

//非路由组件
// import HeaderNav from './components/HeaderNav/index'


//路由组件
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Shopcar from './pages/Shopcar/Shopcar'
import Things from './pages/Things/Thins'
import Search from './pages/Search/Search'
import Personal from './pages/Personal/Personal.jsx'

class App extends Component {
  componentDidMount(){
    this.props.getCategoryData()
    this.props.getDropDownData()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/shopcar" component={Shopcar}></Route>
          <Route path="/things" component={Things}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/personal" component={Personal}></Route>          
          <Redirect path="/" to="/home" exact></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default connect(
  state => ({
    categoryData: state.categoryData
  }),
  {
    getCategoryData,
    getDropDownData
  }
)(App)
