import api from '@/api/topic'

function loading (className, propName, descriptor) {
  const { value } = descriptor
  descriptor.value = async function () {
    let res
    this.loading = true
    try {
      res = await value.apply(this, arguments)
    } catch (e) {
      res = Promise.reject(e)
    }
    this.loading = false
    return res
  }
}

export default {
  modules: {
    index: {
      data () {
        return {
          list: [],
          loading: false,
          query: {
            tab: 'all',
            limit: 20,
            mdrender: false,
            page: 1
          }
        }
      },
      @loading
      async getTopics (query) {
        this.query.page = 1
        const res = await api.getTopics({ ...this.query, ...query })
        this.list = res.data
      },
      @loading
      async pullGetTopics (query) {
        this.query.page++
        const res = await api.getTopics({ ...this.query, ...query })
        this.list = [...this.list, ...res.data]
      }
    }
  }
}
