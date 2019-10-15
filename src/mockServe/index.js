import Mock from 'mockjs'

import category from './category.json'
// category数据
Mock.mock("/category", {
  code:0,
  data: category
})