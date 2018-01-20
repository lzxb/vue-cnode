import Vue from 'vue'
import I18n from 'vue-i18n'
import zhCn from './zh-CN/index'

Vue.use(I18n)

export default new I18n({
  locale: 'zh-CN',
  messages: {
    'zh-cn': zhCn
  }
})
