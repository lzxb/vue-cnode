import http from './http'

export default {
  getTopics (params) {
    return http.get(`/topics`, { params })
  }
}
