webpackJsonp([4],{

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(37)

	/* script */
	__vue_exports__ = __webpack_require__(39)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/user/username/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f93c9c0"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3f93c9c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3f93c9c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3f93c9c0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3f93c9c0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.user .user-bg[data-v-3f93c9c0] {\n  overflow: hidden;\n  width: 100%;\n  height: 160px;\n  background: #80bd01;\n}\n.user .user-bg img[data-v-3f93c9c0] {\n  width: 100%;\n}\n.user .headimg[data-v-3f93c9c0] {\n  overflow: hidden;\n  position: relative;\n  z-index: 2;\n  margin-top: -42px;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  border: 1px solid #eee;\n  background: #fff;\n}\n.user .headimg .pic[data-v-3f93c9c0] {\n  overflow: hidden;\n  width: 80px;\n  height: 80px;\n  margin: 2px;\n}\n.user .headimg .pic img[data-v-3f93c9c0] {\n  width: 100%;\n  height: 100%;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  background: #eee;\n}\n.user .name[data-v-3f93c9c0] {\n  margin: 20px 10px;\n  font-size: 20px;\n  font-weight: 500;\n}\n.user .score[data-v-3f93c9c0] {\n  width: 100%;\n  font-size: 12px;\n}\n.user .score div[data-v-3f93c9c0] {\n  padding: 10px;\n}\n.tab-nav[data-v-3f93c9c0] {\n  margin-top: 10px;\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  background: #fff;\n}\n.tab-nav li[data-v-3f93c9c0] {\n  line-height: 38px;\n  text-align: center;\n  border-right: 1px solid #eee;\n  font-size: 16px;\n}\n.tab-nav li[data-v-3f93c9c0]:last-of-type {\n  border: none;\n}\n.tab-nav li.on[data-v-3f93c9c0] {\n  color: #80bd01;\n}\n", ""]);

	// exports


/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _is = __webpack_require__(19);

	var _is2 = _interopRequireDefault(_is);

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _routeData = __webpack_require__(40);

	var _routeData2 = _interopRequireDefault(_routeData);

	var _list = __webpack_require__(44);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { list: _list2.default },
	    mixins: [_routeData2.default],
	    routeData: function routeData() {
	        return {
	            tabIndex: 0,
	            data: {}
	        };
	    },
	    created: function created() {
	        this.getData();
	    },

	    watch: {
	        $route: 'getData'
	    },
	    methods: {
	        getData: function getData() {
	            var _this = this;

	            var _$route$params$userna = this.$route.params.username,
	                username = _$route$params$userna === undefined ? '' : _$route$params$userna;

	            _util2.default.get('/api/v1/user/' + username, {}, function (_ref) {
	                var data = _ref.data;


	                if (_is2.default.object(data) && data.loginname) _this.data = data;
	            });
	        }
	    }
	};

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(45)

	/* script */
	__vue_exports__ = __webpack_require__(47)

	/* template */
	var __vue_template__ = __webpack_require__(48)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/user/username/list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-50400bc0"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50400bc0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-50400bc0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-50400bc0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-50400bc0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.list[data-v-50400bc0] {\n  overflow: hidden;\n}\n.list li[data-v-50400bc0] {\n  padding: 10px;\n  height: 50px;\n  border-bottom: 1px solid #eee;\n  background: #fff;\n}\n.list li .head .pic[data-v-50400bc0] {\n  overflow: hidden;\n  width: 24px;\n  height: 24px;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n}\n.list li .head .pic img[data-v-50400bc0] {\n  width: 100%;\n  height: 100%;\n}\n.list li .main[data-v-50400bc0] {\n  padding-left: 10px;\n  color: inherit;\n}\n.list li .main .con[data-v-50400bc0] {\n  padding: 0 5px;\n  line-height: 30px;\n  font-size: 14px;\n}\n.list li .main .name[data-v-50400bc0] {\n  color: #666;\n}\n.list li .main .line[data-v-50400bc0] {\n  line-height: 20px;\n}\n.list li .main time[data-v-50400bc0] {\n  font-size: 12px;\n  color: #888;\n}\n.list-null[data-v-50400bc0] {\n  line-height: 120px;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },

/***/ 47:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        list: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        }
	    }
	};

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [(_vm.list.length) ? _h('ul', {
	    staticClass: "list"
	  }, [_vm._l((_vm.list), function(item) {
	    return _h('li', {
	      attrs: {
	        "flex": "box:first",
	        "track-by": "id"
	      }
	    }, [_h('router-link', {
	      staticClass: "head",
	      attrs: {
	        "to": '/user/' + item.author.loginname
	      }
	    }, [_h('div', {
	      staticClass: "pic"
	    }, [_h('img', {
	      attrs: {
	        "src": item.author.avatar_url,
	        "alt": ""
	      }
	    })])]), " ", _h('router-link', {
	      staticClass: "main",
	      attrs: {
	        "to": '/topic/' + item.id,
	        "flex": "dir:top box:first"
	      }
	    }, [_h('div', {
	      staticClass: "line",
	      attrs: {
	        "flex": "box:last"
	      }
	    }, [_h('div', {
	      staticClass: "name"
	    }, [_vm._s(item.author.loginname)]), " ", _h('time', [_vm._s(item.last_reply_at)])]), " ", _h('div', {
	      staticClass: "con"
	    }, [_vm._s(item.title)])])])
	  })]) : _vm._e(), " ", (!_vm.list.length) ? _h('div', {
	    staticClass: "list-null"
	  }, ["没有记录"]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-50400bc0", module.exports)
	  }
	}

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "个人资料"
	    }
	  }, [_h('div', {
	    staticClass: "item",
	    attrs: {
	      "flex": "main:center cross:center"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$router.go(-1)
	      }
	    },
	    slot: "left"
	  }, [_h('i', {
	    staticClass: "iconfont icon-back"
	  })])]), " ", _h('v-content', {
	    directives: [{
	      name: "scroll-record",
	      rawName: "v-scroll-record"
	    }],
	    staticStyle: {
	      "bottom": "0"
	    }
	  }, [_h('div', {
	    staticClass: "user",
	    attrs: {
	      "flex": "dir:top cross:center"
	    }
	  }, [_h('div', {
	    staticClass: "user-bg"
	  }, [_h('img', {
	    attrs: {
	      "src": __webpack_require__(50),
	      "alt": ""
	    }
	  })]), " ", _h('div', {
	    staticClass: "headimg"
	  }, [_h('div', {
	    staticClass: "pic"
	  }, [(_vm.data.avatar_url) ? _h('img', {
	    attrs: {
	      "src": _vm.data.avatar_url,
	      "alt": ""
	    }
	  }) : _vm._e()])]), " ", _h('div', {
	    staticClass: "name"
	  }, [_vm._s(_vm.data.loginname)]), " ", _h('div', {
	    staticClass: "score",
	    attrs: {
	      "flex": "main:justify"
	    }
	  }, [_h('div', ["积分：" + _vm._s(_vm.data.score)]), " ", _h('div', ["注册于：" + _vm._s(_vm.data.create_at)])])]), " ", _h('ul', {
	    staticClass: "tab-nav",
	    attrs: {
	      "flex": "box:mean"
	    }
	  }, [_h('li', {
	    class: {
	      on: _vm.tabIndex == 0
	    },
	    on: {
	      "click": function($event) {
	        _vm.tabIndex = 0
	      }
	    }
	  }, ["回复"]), " ", _h('li', {
	    class: {
	      on: _vm.tabIndex == 1
	    },
	    on: {
	      "click": function($event) {
	        _vm.tabIndex = 1
	      }
	    }
	  }, ["主题"])]), " ", _h('list', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.tabIndex == 0),
	      expression: "tabIndex == 0"
	    }],
	    attrs: {
	      "list": _vm.data.recent_replies
	    }
	  }), " ", _h('list', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.tabIndex == 1),
	      expression: "tabIndex == 1"
	    }],
	    attrs: {
	      "list": _vm.data.recent_topics
	    }
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3f93c9c0", module.exports)
	  }
	}

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "headimg-bg.jpg?v=55bfe251347ce829af67d68847a6806c";

/***/ }

});