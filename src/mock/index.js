import Mock from 'mockjs'
Mock.mock('/screen/data', 'get', {
  status: 200,
  data: {
    code: 0,
    data: 'aa',
    msg: '请求成功'
  }
})
