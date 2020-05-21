import axios from 'axios'
import { throwErr } from '../utils/throwErr.js' //utils 捕捉服务端 http 状态码的方法
import configureStore  from '../redux/store'
const store = configureStore();
let storeState = store.getState();

// 过滤请求
axios.interceptors.request.use(config => {
  //config 为请求的一些配置 例如: 请求头 请求时间 Token
  // 如果服务端帮忙处理好了，那么请求阶段只要传好参数就好了
  config.timeout = 10 * 1000 // 请求响应时间
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器，200后使用拦截器
axios.interceptors.response.use(
  response => {
    if (response.data && response.data.code === 0) {
      // code 0  请求成功
      return Promise.resolve(response.data) // 使用 Promise.resolve 正常响应
    } else if (response.data && response.data.code === 1) {
      // code 1  业务异常
      return Promise.reject(response.data) // 使用 Promise.reject 抛出错误和异常
    }
    else if (!response.data || (response.data.code !== 0 && response.data.code !== 1)) { // code -1 系统异常
      if (response) {
        let res = {}
        res.code = response.status
        res.msg = throwErr(response.status, response) // throwErr 捕捉服务端的 http 状态码 定义在 utils 工具类的方法
        return Promise.resolve(res)
      } else {
        return Promise.resolve(response)
      }
    }
  },
  error => {
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.msg = throwErr(error.response.status, error.response) // throwErr 捕捉服务端的 http 状态码 定义在 utils 工具类的方法
      return Promise.reject(res)
    } else {
      return Promise.reject(error)
    }
  }
)

function getBaseUrl(dataSource) {
  let baseURL = ''
  if (dataSource) {
    if (process.env.NODE_ENV === 'development') { // 本地开发环境
      baseURL = dataSource.indexOf('/') >= 0 ? dataSource : '/' + dataSource
    } else {
      baseURL = process.env.REACT_APP_API + dataSource
    }
  } else {
    if (process.env.NODE_ENV === 'development') { // 本地开发环境
      // baseURL = '/yebpn'
      baseURL = process.env.REACT_APP_API
    } else {
      baseURL = process.env.REACT_APP_API
    }
  }
  return baseURL
}

// axios.defaults.withCredentials = true; // 让ajax携带cookie
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken

export default function request(method, url, data, headers, dataSource, noUse) {
  return new Promise((resolve, reject) => {
    let isParams = method && method.toLowerCase() === 'get'
    let userInfo = storeState.loginInfo
    // 部分接口需要在请求头部加入Authorization才可以请求
    let tokenType = userInfo && userInfo.tokenType ? userInfo.tokenType : 'bearer';
    let accessToken = userInfo && userInfo.access_token ? userInfo.access_token : ''; // f4f969a5-f154-4a07-a70f-5891b6f806ac
    let myHeader = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
      // 'X-TenantCode': 'yeb'
    };
    if (noUse) {
      //直接无视token
    } else {
      if (accessToken) {
        myHeader.Authorization = tokenType + ' ' + accessToken
      }
    }
    axios({
      method: method || 'post',
      url: getBaseUrl(dataSource) + url,
      params: isParams && data ? data : '',
      // params: isParams && data ? {params: data} : data,
      data: data || {},
      headers: headers ? Object.assign(myHeader, headers) : myHeader,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    }).then(res => {
      if (res && res.code === 0) {
        resolve(res && res.data ? res.data : res)
      } else {
        reject(res && res.data ? res.data : res)
      }
    }).catch(res => {
      reject(res && res.data ? res.data : res)
    })
  })
}
