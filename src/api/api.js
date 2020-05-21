import request from './request' // 引入 axios 的封装方法


// 获取配置
export function defaultGetTypeInfo(params) {
  return request('get', '/default/getTypeInfo', params, '', "", true)
}

