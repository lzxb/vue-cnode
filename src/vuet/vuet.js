import Vue from 'vue'
import Vuet from 'vuet'
import utils from 'utils'
import http from 'http'
import VuetScroll from 'vuet-scroll'
import VuetRoute from 'vuet-route'

Vue
  .use(Vuet)
  .use(VuetScroll)

Vuet
  .rule('route', VuetRoute)

export default new Vuet({
  pathJoin: '-',
  modules: {
    topic: {
      modules: {
        create: {
          data () {
            return {
              title: '', // 标题
              tab: '', // 发表的板块
              content: '' // 发表的内容
            }
          },
          async create () {
            if (!this.title) {
              return utils.toast('标题不能为空')
            } else if (!this.tab) {
              return utils.toast('选项不能为空')
            } else if (!this.content) {
              return utils.toast('内容不能为空')
            }
            const res = await http.post(`/topics`, {
              ...this.state
            })
            if (res.success) {
              this.reset()
              this.app.$router.push({
                path: `/topic/${res.topic_id}`
              })
            } else {
              utils.toast(res.error_msg)
            }
            return res
          }
        },
        list: {
          data () {
            return {
              list: [], // 列表存储的数据
              loading: true, // 数据正在加载中
              done: false, // 数据是否已经全部加载完成
              page: 1 // 加载的页数
            }
          },
          route: {
            once: true // 当前页面，只加载一次，这样我们就可以做上拉加载了
          },
          async fetch () {
            const { tab = '' } = this.app.$route.query
            const query = {
              tab,
              mdrender: false,
              limit: 20,
              page: this.page
            }
            this.loading = true
            const res = await http.get('/topics', query)
            this.list = [...this.list, ...res.data]
            this.page++
            this.loading = false
            this.done = res.data.length < 20
          }
        },
        detail: {
          data () {
            return {
              topic: {
                id: null,
                author_id: null,
                tab: null,
                content: null,
                title: null,
                last_reply_at: null,
                good: false,
                top: false,
                reply_count: 0,
                visit_count: 0,
                create_at: null,
                author: {
                  loginname: null,
                  avatar_url: null
                },
                replies: [],
                is_collect: false
              },
              existence: true,
              loading: true,
              commentId: null
            }
          },
          async fetch () {
            const route = this.app.$route
            const { data } = await http.get(`/topic/${route.params.id}`)
            if (data) {
              this.topic = data
              this.existence = true
            } else {
              this.existence = false
            }
            this.loading = false
          }
        }
      }
    },
    user: {
      modules: {
        self: {
          data () {
            return JSON.parse(localStorage.getItem('vue_cnode_self')) || {
              avatar_url: null,
              id: null,
              loginname: null,
              success: false
            }
          },
          async login (accesstoken) {
            const res = await http.post(`/accesstoken`, { accesstoken })
            if (typeof res === 'object' && res.success) {
              this.state = res
              localStorage.setItem('vue_cnode_self', JSON.stringify(res))
              localStorage.setItem('vue_cnode_accesstoken', accesstoken)
            }
            return res
          },
          signout () {
            localStorage.removeItem('vue_cnode_self')
            localStorage.removeItem('vue_cnode_accesstoken')
            this.reset()
            this.app.$router.replace('/')
          }
        },
        detail: {
          data () {
            return {
              user: {
                loginname: null,
                avatar_url: null,
                githubUsername: null,
                create_at: null,
                score: 0,
                recent_topics: [],
                recent_replies: []
              },
              existence: true,
              loading: true,
              tabIndex: 0
            }
          },
          async fetch () {
            const route = this.app.$route
            const { data } = await http.get(`/user/${route.params.username}`)
            if (data) {
              this.user = data
            } else {
              this.existence = false
            }
            this.loading = false
          }
        },
        messages: {
          data () {
            return {
              list: [],
              loading: true
            }
          },
          async fetch () {
            if (!this.vuet.getState('user-self').id) return
            const { data } = await http.get(`/messages`, { mdrender: true })
            this.list = [...data.has_read_messages, ...data.hasnot_read_messages]
          },
          modules: {
            count: {
              data () {
                return 0
              },
              async fetch () {
                if (!this.vuet.getState('user-self').id) return
                const res = await http.get('/message/count')
                if (!res.data) return
                this.state = res.data
              }
            }
          }
        }
      }
    }
  }
})
