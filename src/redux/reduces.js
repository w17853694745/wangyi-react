import {combineReducers} from 'redux'
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
//获取category的列表数据
const initcategoryData = []
function categoryData (state = initcategoryData,action) {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      return state = action.data
    default:
      return state
  }
}

//改变things的状态:true:发现;false:甄选家
const initType = true
function isfind(state = initType, action) {
  switch (action.type) {
    case CHANGE_THINGS_TYPE:
      return state=action.data  
    default:
      return state
  }
}

// 发现的数据
const initrecommendList = []
function recommendList(state = initrecommendList,action) {
  switch (action.type) {
    case GET_FIND_DATA:
      return state = action.data
    default:
      return state
  }
}
// 发现下拉刷新的数据
const initmoreRecommendData = {
  hasMore: true,
  result: []
}
function moreRecommendData(state = initmoreRecommendData, action) {
  // console.log(action)
  switch (action.type) {
    case GET_FIND_MORE_DATA:
      if (!state.hasMore) {
        state = action.data // 如果 autoRecommendData 还没有数据
        return state
      } else if (state.hasMore) {
        state.result.push(...action.data.result) // 如果有数据向其中追加
        return state
      }
    default:
      return state
  }
}

//甄选家头部数据
const initheaderData = []
function headerData(state = initheaderData, action) { 
  switch (action.type) {
    case GET_HEADER_DATA:
      state = action.data
      return state
    default:
      return state
  }
}

//甄选家评论数据
const initthreeTypeData = {
  hasMore: true,
  type: 1,
  pagination: {},
  topicList: []
}
function threeTypeData(state = initthreeTypeData, action) {
  switch (action.type) {
    case GET_THINGS_DATA:
      if (!state.hasMore) {
        state = action.data
        return state
      } else if (state.hasMore) {
        if (state.type === action.data.type2) {
          // 这里如果只是改变了state里的一条属性,就无法重新调用页面的render
          // state.topicList.push(...action.data.topicList)
          // console.log(state)
          // return state

          // 如果使用Object.assign,返回一个新的合并的对象,就可以重新render,页面也会重新刷新,
          // 是不是因为state是浅层监视,如果不该变数据本身,只改变数据值,不会调用render()?
          let topicList = state.topicList
          topicList.push(...action.data.topicList)
          return Object.assign({},state,{topicList:[...topicList]})
        } else {
          state = action.data
        }
        return state
      }
    default:
      return state
  }
}

//搜索的数据
const initseacherData = []
function seacherData(state = initseacherData, action) {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return state = action.data
    default:
      return state
  }
}

//搜索后的列表
const initseacherList = []
function seacherList(state = initseacherList,action) {
  switch (action.type) {
    case SEARCH_LIST_DATA:
      return state = action.data
    default:
      return state
  }
}

export default combineReducers({
  categoryData,
  isfind,
  recommendList,
  moreRecommendData,
  headerData,
  threeTypeData,
  seacherData,
  seacherList
})