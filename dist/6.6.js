webpackJsonp([6],{

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(58)

	/* script */
	__vue_exports__ = __webpack_require__(60)

	/* template */
	var __vue_template__ = __webpack_require__(61)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/my/messages/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6428f5f5"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6428f5f5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6428f5f5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6428f5f5&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6428f5f5&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.msg-box .list[data-v-6428f5f5] {\n  padding: 0;\n  margin: 0;\n}\n.msg-box .list li[data-v-6428f5f5] {\n  position: relative;\n  padding: 10px;\n  list-style: none;\n  border-bottom: 1px solid #eee;\n  background: #fff;\n  /*a {\n                color: @text;\n            }*/\n}\n.msg-box .list li .name[data-v-6428f5f5] {\n  font-weight: bold;\n  line-height: 28px;\n}\n.msg-box .list li .name time[data-v-6428f5f5] {\n  padding-left: 5px;\n  font-size: 12px;\n  font-weight: normal;\n  color: #999;\n}\n.msg-box .list li .content[data-v-6428f5f5] {\n  padding: 5px 0;\n}\n.msg-box .list li .weidu[data-v-6428f5f5] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  width: auto;\n  text-align: right;\n}\n.msg-box .list li .weidu .iconfont[data-v-6428f5f5] {\n  font-size: 60px;\n  color: #222;\n}\n.user-headimg[data-v-6428f5f5] {\n  width: 38px;\n  height: 38px;\n  margin-right: 10px;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  border: 1px solid #ddd;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n  background-color: #eee;\n}\n.markdown-body[data-v-6428f5f5] {\n  padding: 5px;\n  margin-top: 10px;\n  -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n          border-radius: 5px;\n  background: #eee;\n}\n", ""]);

	// exports


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(23);

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _routeData = __webpack_require__(40);

	var _routeData2 = _interopRequireDefault(_routeData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_routeData2.default],
	    computed: (0, _vuex.mapState)({ user: function user(state) {
	            return state.user;
	        } }),
	    routeData: function routeData() {
	        return {
	            list: []
	        };
	    },
	    created: function created() {
	        this.getList();
	    },

	    methods: {
	        getList: function getList() {
	            var _this = this;

	            var accesstoken = this.user.accesstoken;

	            if (!accesstoken) return false;
	            _util2.default.get('/api/v1/messages', { mdrender: true, accesstoken: accesstoken }, function (_ref) {
	                var data = _ref.data;
	                var hasnot_read_messages = data.hasnot_read_messages,
	                    has_read_messages = data.has_read_messages;

	                Array.prototype.push.apply(hasnot_read_messages, has_read_messages);
	                _this.list = hasnot_read_messages;
	            });
	        }
	    }
	}; //
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

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "消息"
	    }
	  }), " ", _h('v-content', {
	    directives: [{
	      name: "scroll-record",
	      rawName: "v-scroll-record"
	    }]
	  }, [(_vm.list.length) ? _h('div', {
	    staticClass: "msg-box"
	  }, [_h('ul', {
	    staticClass: "list"
	  }, [_vm._l((_vm.list), function(item, $index) {
	    return _h('li', {
	      attrs: {
	        "flex": "box:first"
	      }
	    }, [_h('router-link', {
	      staticClass: "user",
	      attrs: {
	        "to": '/user/' + item.author.loginname
	      }
	    }, [_h('div', {
	      staticClass: "user-headimg",
	      style: ({
	        backgroundImage: 'url(' + item.author.avatar_url + ')'
	      })
	    })]), " ", _h('div', [_h('div', {
	      staticClass: "name"
	    }, [_vm._s(item.author.loginname) + "\n                            ", _h('time', [_vm._s(_vm._f("formatDate")(item.create_at))])]), " ", (item.type == 'at') ? _h('div', ["\n                            在话题\n                            ", _h('router-link', {
	      attrs: {
	        "to": '/topic/' + item.topic.id
	      }
	    }, [_vm._s(item.topic.title)]), " 中 @了你\n\n                        "]) : _vm._e(), " ", (item.type == 'reply') ? _h('div', ["\n                            回复你了的话题\n                            ", _h('router-link', {
	      attrs: {
	        "to": '/topic/' + item.topic.id
	      }
	    }, [_vm._s(item.topic.title)])]) : _vm._e(), " ", _h('div', {
	      staticClass: "markdown-body",
	      domProps: {
	        "innerHTML": _vm._s(item.reply.content)
	      }
	    })]), " ", _h('div', {
	      staticClass: "weidu"
	    }, [_h('i', {
	      staticClass: "iconfont icon-weidu"
	    })])])
	  })])]) : _vm._e(), " ", (!_vm.list.length) ? _h('v-data-null') : _vm._e()]), " ", _h('v-footer')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6428f5f5", module.exports)
	  }
	}

/***/ }

});