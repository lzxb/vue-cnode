class WatchComponent {
  constructor () {
    this.watches = []
    this.components = [] // 监听的组件 [vm, ...]
    this.componentsSubs = [] // [unwatches, ...]
  }
  add (watch) {
    this.watches.push(watch)
  }
  init (vm) {
    const componentsSubs = this.watches.map(watchOption => {
      return vm.$watch(() => {
        return watchOption.watch.call(vm)
      }, (newVal, oldVal) => {
        if (newVal === watchOption.value) return
        if (Object.prototype.hasOwnProperty.call(watchOption, 'value')) {
          watchOption.handler.call(vm, newVal, oldVal)
        }
        watchOption.value = newVal
      }, {
        immediate: true
      })
    })
    this.components.push(vm)
    this.componentsSubs.push(componentsSubs)
  }
  destroy (vm) {
    const index = this.components.indexOf(vm)
    if (index === -1) return
    this.components.splice(index, 1)
    const componentsSubs = this.componentsSubs.splice(index, 1)
    componentsSubs.forEach(componentsSub => {
      componentsSub.forEach(unwatch => unwatch())
    })
  }
}

const toBe = (vm, callback) => {
  const { watchComponents } = vm.$options
  if (!Array.isArray(watchComponents)) return
  watchComponents.forEach(watchComponent => {
    callback(watchComponent)
  })
}

WatchComponent.install = function (Vue) {
  Vue.mixin({
    created () {
      toBe(this, watchComponent => watchComponent.init(this))
    },
    activated () {
      toBe(this, watchComponent => watchComponent.init(this))
    },
    deactivated () {
      toBe(this, watchComponent => watchComponent.destroy(this))
    },
    beforeDestroy () {
      toBe(this, watchComponent => watchComponent.destroy(this))
    }
  })
}

export default WatchComponent
