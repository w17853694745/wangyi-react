import {
  GET_CATEGORY_DATA,
  CHANGE_THINGS_TYPE,
  GET_FIND_DATA,
  GET_FIND_MORE_DATA,
  GET_HEADER_DATA,
  GET_THINGS_DATA,
  GET_SEARCH_DATA,
  SEARCH_LIST_DATA
} from './action-types'

import {
  reqCategory,
  reqDropDown,
  reqAutoRecommendData,
  reqColection,
  reqList,
  reqInitSearch,
  reqSearchResult
} from '../api'

// 获取category列表的同步action
const CategoryData = (data) => ({
  type: GET_CATEGORY_DATA,
  data
})

// 发现的数据
const DropDownData = (data)=>({type:GET_FIND_DATA,data:data})

// 发现下拉刷新的数据
const MoreRecommendData = (data)=>({type:GET_FIND_MORE_DATA,data:data})

// 甄选家头部数据
const headerData = (data)=>({type:GET_HEADER_DATA,data:data})

// 甄选家评论数据
const thingsData = (data)=>({type:GET_THINGS_DATA,data})

//搜索头部的数据
const SeacherData = (data)=>({type:GET_SEARCH_DATA,data})

//搜索后的列表
const SeacherList = (data)=>({type:SEARCH_LIST_DATA,data})

//修改things状态的同步action
export const changeThingsType = (data)=>({type:CHANGE_THINGS_TYPE,data})

// 获取categoty列表的异步action
export const getCategoryData = function () {
  return async dispatch =>{
    const result = await reqCategory() // 发送ajax
    const categoryData = result.data.categoryL1List
    
    if (result.code === 0) {
      dispatch(CategoryData(categoryData))
    }
  }
}

//获取发现的数据
export const getDropDownData = function () {
  return async dispatch =>{
    const result = await reqDropDown(); // 发送ajax
    const recommendData = result.data
    if (result.code == 200) {
      dispatch(DropDownData(recommendData)) // 根据返回的数据调用 mutations 更改数据
    }
  }
}

//获取发现下拉刷新的数据
export const getMoreRecommendData = function ({page, size}) {
  return async dispatch =>{
    const result = await reqAutoRecommendData(page, size); // 发送ajax
    const moreRecommendData = result.data
    if (result.code === "200") {
      dispatch(MoreRecommendData(moreRecommendData)) // 根据返回的数据调用 mutations 更改数据
    }
  }
}

//获取甄选家头部的数据
export const getHeaderData = function () {
  return async dispatch =>{
    const result = await reqColection()
    const data = result.data.lookList
    dispatch(headerData(data))

  }
}

//获取甄选家评论数据
export const getThreeTypeData = function ({page, size, type}) {
  return async dispatch=>{
    const result = await reqList(page, size, type); // 发送ajax
    const data = result.data
    if (result.code === "200") {
      data.type2 = type
      dispatch(thingsData(data)) // 根据返回的数据调用 mutations 更改数据
    }
  }
}

//获取搜索的数据
export const getSeacherData = function () {
  return async dispatch=>{
    const result = await reqInitSearch(); // 发送ajax
    const seacherData = result.data.defaultKeywords
    dispatch(SeacherData(seacherData))
  }
}

//获取搜索后的列表
export const getSeacherList = function (content) {
  return async dispatch=>{
    const result = await reqSearchResult(content)
    const searchList = result.data
    dispatch(SeacherList(searchList))
  }
}