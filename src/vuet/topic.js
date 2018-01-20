import api from '@/api/topic'

export default {
  modules: {
    index: {
      data () {
        return {
          list: []
        }
      },
      async getTopics (query) {
        const res = await api.getTopics(query)
        this.list = res.data
      }
    }
  }
}
