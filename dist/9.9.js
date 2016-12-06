webpackJsonp([9],{

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(78)

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(82)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/index/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3ae534f8"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ae534f8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3ae534f8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ae534f8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ae534f8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.nav[data-v-3ae534f8] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  border-bottom: 1px solid #ddd;\n}\n.nav ul[data-v-3ae534f8] {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.nav ul li[data-v-3ae534f8] {\n  position: relative;\n  list-style: none;\n  line-height: 49px;\n  text-align: center;\n}\n.nav ul a[data-v-3ae534f8] {\n  display: block;\n  text-decoration: none;\n  font-size: 14px;\n  color: #a2a2a2;\n}\n.nav ul .active[data-v-3ae534f8]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 1px;\n  z-index: 1;\n  height: 3px;\n  background: #80bd01;\n}\n.nav ul .active a[data-v-3ae534f8] {\n  color: #222;\n}\n.list[data-v-3ae534f8] {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  background: #eee;\n}\n.list li[data-v-3ae534f8] {\n  position: relative;\n  padding: 15px 15px 0 15px;\n  margin-bottom: 15px;\n  list-style: none;\n  -webkit-box-shadow: 0 0 5px #ccc;\n     -moz-box-shadow: 0 0 5px #ccc;\n          box-shadow: 0 0 5px #ccc;\n  background: #fff;\n}\n.list .top[data-v-3ae534f8] {\n  height: 40px;\n}\n.list .top .headimg[data-v-3ae534f8] {\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  border: 1px solid #ddd;\n  background-position: center center;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n}\n.list .top .box[data-v-3ae534f8] {\n  padding-left: 5px;\n}\n.list .top .box strong[data-v-3ae534f8] {\n  line-height: 24px;\n  font-size: 16px;\n  font-weight: normal;\n  color: #080808;\n}\n.list .top .box time[data-v-3ae534f8] {\n  line-height: 16px;\n  font-size: 12px;\n  font-style: normal;\n  color: #aaa;\n}\n.list .top .box .tag[data-v-3ae534f8] {\n  margin-left: 4px;\n  line-height: 16px;\n  font-size: 12px;\n  font-style: normal;\n  color: #80bd01;\n}\n.list .tit[data-v-3ae534f8] {\n  padding: 10px 0;\n  line-height: 22px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #222;\n}\n.expand[data-v-3ae534f8] {\n  padding: 10px 0;\n  border-top: 1px solid #e1e1e1;\n  text-align: center;\n}\n.expand .item[data-v-3ae534f8] {\n  padding: 0 10px;\n  line-height: 20px;\n  text-align: center;\n  border-right: 1px solid #e1e1e1;\n}\n.expand .item[data-v-3ae534f8]:last-of-type {\n  border: none;\n}\n.expand .item .iconfont[data-v-3ae534f8] {\n  color: #aaa;\n}\n.expand .item .num[data-v-3ae534f8],\n.expand .item .time[data-v-3ae534f8] {\n  padding-left: 3px;\n  font-size: 12px;\n  color: #aaa;\n}\n.expand .item .pic[data-v-3ae534f8],\n.expand .item img[data-v-3ae534f8] {\n  width: 16px;\n  height: 16px;\n  background: #e1e1e1;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n  background-position: center center;\n}\n.expand .item .pic[data-v-3ae534f8] {\n  overflow: hidden;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n}\n", ""]);

	// exports


/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _pullList2 = __webpack_require__(81);

	var _pullList3 = _interopRequireDefault(_pullList2);

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
	//
	//
	//
	//
	//

	exports.default = {
	    mixins: [_pullList3.default],
	    methods: {
	        _pullList: function _pullList() {
	            var page = this.page,
	                $route = this.$route;
	            var _$route$query$tab = $route.query.tab,
	                tab = _$route$query$tab === undefined ? 'all' : _$route$query$tab;

	            return {
	                url: '/api/v1/topics',
	                data: { page: page, tab: tab }
	            };
	        }
	    }
	};

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _is = __webpack_require__(19);

	var _is2 = _interopRequireDefault(_is);

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _routeData = __webpack_require__(40);

	var _routeData2 = _interopRequireDefault(_routeData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getPageKey = function getPageKey() {
	    return _is2.default.object(history.state) ? history.state.key : location.href;
	};

	exports.default = {
	    mixins: [_routeData2.default],
	    routeData: function routeData() {
	        return {
	            complete: false, //数据是否加载完成
	            loading: false, //是否在请求中
	            page: 1, //当前请求的页数
	            list: [] //列表的数据
	        };
	    },
	    mounted: function mounted() {
	        this.loading = false;
	    },
	    created: function created() {
	        var _this = this;

	        if (getPageKey() != this.list.key) {
	            //页面前进
	            if (this.page == 1) {
	                //首次访问组件
	                this.pullList();
	                this.list.key = getPageKey();
	            } else {
	                _extends(this.$data, this.$options.routeData());
	                this.$nextTick(function () {
	                    _this.list.key = getPageKey();
	                    _this.pullList();
	                });
	            }
	        } else {
	            this.loading = false; //防止路由切换时，没有执行回调时引发的bug
	        }
	    },

	    watch: {
	        $route: function $route() {
	            var _this2 = this;

	            if (getPageKey() != this.list.key) {
	                //页面前进，则重置数据
	                _extends(this.$data, this.$options.routeData());
	                this.$nextTick(function () {
	                    _this2.list.key = getPageKey();
	                    _this2.pullList();
	                });
	            } else {
	                // console.log('后退返回页面，无需任何操作，从缓存中还原数据')
	            }
	        }
	    },
	    methods: {
	        pullList: function pullList() {
	            var _this3 = this;

	            if (this.complete || this.loading) return;
	            this.loading = true;

	            var _pullList = this._pullList(),
	                url = _pullList.url,
	                _pullList$data = _pullList.data,
	                data = _pullList$data === undefined ? {} : _pullList$data;

	            _util2.default.get(url, data, function (_ref) {
	                var data = _ref.data;

	                _this3.loading = false; //请求完成
	                if (data.length > 0) {
	                    data.forEach(function (item) {
	                        return _this3.list.push(item);
	                    });
	                } else {
	                    _this3.complete = true;
	                }
	                _this3.page++;
	            });
	        },
	        seeing: function seeing() {
	            this.pullList();
	        }
	    }
	};

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('nav', {
	    staticClass: "nav"
	  }, [_h('ul', {
	    attrs: {
	      "flex": "box:mean"
	    }
	  }, [_h('li', {
	    class: {
	      active: !this.$route.query.tab
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, ["全部"])]), " ", _h('li', {
	    class: {
	      active: this.$route.query.tab == 'good'
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/?tab=good"
	    }
	  }, ["精华"])]), " ", _h('li', {
	    class: {
	      active: this.$route.query.tab == 'share'
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/?tab=share"
	    }
	  }, ["分享"])]), " ", _h('li', {
	    class: {
	      active: this.$route.query.tab == 'ask'
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/?tab=ask"
	    }
	  }, ["问答"])]), " ", _h('li', {
	    class: {
	      active: this.$route.query.tab == 'job'
	    }
	  }, [_h('router-link', {
	    attrs: {
	      "to": "/?tab=job"
	    }
	  }, ["招聘"])])])]), " ", _h('v-content', {
	    directives: [{
	      name: "scroll-record",
	      rawName: "v-scroll-record"
	    }]
	  }, [_h('ul', {
	    staticClass: "list"
	  }, [_vm._l((_vm.list), function(item) {
	    return _h('li', {
	      key: "item.id"
	    }, [_h('router-link', {
	      attrs: {
	        "to": '/topic/' + item.id
	      }
	    }, [_h('div', {
	      staticClass: "top",
	      attrs: {
	        "flex": "box:first"
	      }
	    }, [_h('div', {
	      staticClass: "headimg",
	      style: ({
	        backgroundImage: 'url(' + item.author.avatar_url + ')'
	      })
	    }), " ", _h('div', {
	      staticClass: "box",
	      attrs: {
	        "flex": "dir:top"
	      }
	    }, [_h('strong', [_vm._s(item.author.loginname)]), " ", _h('div', {
	      attrs: {
	        "flex": ""
	      }
	    }, [_h('time', [_vm._s(_vm._f("formatDate")(item.create_at))]), " ", _h('span', {
	      staticClass: "tag"
	    }, ["#分享#"])])])]), " ", (item.top || item.good) ? _h('div', {
	      staticClass: "common-typeicon",
	      attrs: {
	        "flex": ""
	      }
	    }, [(item.good) ? _h('div', {
	      staticClass: "icon"
	    }, [_h('i', {
	      staticClass: "iconfont icon-topic-good"
	    })]) : _vm._e(), " ", (item.top) ? _h('div', {
	      staticClass: "icon"
	    }, [_h('i', {
	      staticClass: "iconfont icon-topic-top"
	    })]) : _vm._e()]) : _vm._e(), " ", _h('div', {
	      staticClass: "tit"
	    }, [_vm._s(item.title)]), " ", _h('div', {
	      staticClass: "expand",
	      attrs: {
	        "flex": "box:mean"
	      }
	    }, [_h('div', {
	      staticClass: "item click",
	      attrs: {
	        "flex": "main:center cross:center"
	      }
	    }, [_h('i', {
	      staticClass: "iconfont icon-click"
	    }), " ", _h('div', {
	      staticClass: "num"
	    }, [_vm._s(item.visit_count > 0 ? item.visit_count : '暂无阅读')])]), " ", _h('div', {
	      staticClass: "item reply",
	      attrs: {
	        "flex": "main:center cross:center"
	      }
	    }, [_h('i', {
	      staticClass: "iconfont icon-comment"
	    }), " ", _h('div', {
	      staticClass: "num"
	    }, [_vm._s(item.reply_count > 0 ? item.reply_count : '暂无评论')])]), " ", _h('div', {
	      staticClass: "item last-reply",
	      attrs: {
	        "flex": "main:center cross:center"
	      }
	    }, [_h('div', {
	      staticClass: "pic"
	    }, [_h('img', {
	      style: ({
	        backgroundImage: 'url(' + item.author.avatar_url + ')'
	      }),
	      attrs: {
	        "alt": ""
	      }
	    })]), " ", _h('time', {
	      staticClass: "time"
	    }, [_vm._s(_vm._f("formatDate")(item.last_reply_at))])])])])])
	  })]), " ", _h('v-loading', {
	    attrs: {
	      "complete": _vm.complete,
	      "loading": _vm.loading
	    },
	    on: {
	      "seeing": _vm.seeing
	    }
	  })]), " ", _h('v-footer')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3ae534f8", module.exports)
	  }
	}

/***/ }

});