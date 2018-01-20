import Vue from 'vue'
import Vuet from 'vuet'
import topic from './topic'

Vue.use(Vuet)

export function createVuet () {
  return new Vuet({
    modules: {
      topic
    }
  })
}
