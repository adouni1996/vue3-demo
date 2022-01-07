import serve from '@/plugins/http.js'
export const getUserInfo = () => {
  return serve.get()
}
