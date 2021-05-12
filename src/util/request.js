import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000,
  headers: {
    'Cache-Control': 'no-cache',
    'Request-Source': 'web',
    Pragma: 'no-cache'
  }
})
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export async function get(url, params) {
  try {
    const { data } = await service.get(url, { params })
    return Promise.resolve(data)
  } catch (err) {
    return Promise.reject(err)
  } finally {
  }
}
