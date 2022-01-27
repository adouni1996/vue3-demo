import serve from '@/plugins/http.js'
// import qs from 'qs'
export const getUserInfo = () => {
  return serve.get('/userInfo')
}

export const login = (params) => {
  // return serve.post('/login', qs.stringify(params))
  return new Promise(res => {
    setTimeout(function() {
      res({
        data: '11',
        msg: 'SUCCESS',
        status: '1001'
      })
    }, 1000)
  })
}
