import axios from 'axios'
import config from '@/config'

const http = axios.create({
  baseURL: config.API_BASE_URL
})

http.interceptors.response.use(res => {
  return res.data
})

export default http
