;(function () {
  var target = typeof window === 'object' ? window : global

  target._APP_CONFIG = {
    API_BASE_URL: 'https://cnodejs.org/api/v1'
  }
})()
