import axios from 'axios'

// 创建 axios 的实例
const service = axios.create({})

service.interceptors.request.use(
  (config) => {
    // config.headers = {
    //   referer: 'https://c.y.qq.com/',
    //   host: 'c.y.qq.com'
    // }
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data

    return res
  }
)
// axios.get(url, {
//   headers: {
//     referer: 'https://c.y.qq.com/',
//     host: 'c.y.qq.com'
//   },
//   params: req.query
// }).then((response) => {
//   res.json(response.data)
// }).catch((e) => {
//   console.log(e)
// })

export default service