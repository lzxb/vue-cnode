webpackJsonp([5],{

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(52)

	/* script */
	__vue_exports__ = __webpack_require__(55)

	/* template */
	var __vue_template__ = __webpack_require__(56)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/my/home/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-33377670"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-33377670", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-33377670", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33377670&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33377670&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.con[data-v-33377670] {\n  background: #eee;\n}\n.user[data-v-33377670] {\n  position: relative;\n  height: 180px;\n  background-image: url(" + __webpack_require__(54) + ");\n  background-position: center center;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n}\n.headimg[data-v-33377670] {\n  position: absolute;\n  top: 100px;\n  bottom: 0;\n  left: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: 0 0 -40px -60px;\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n          border-radius: 50%;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  -moz-background-size: cover;\n    -o-background-size: cover;\n       background-size: cover;\n  background-position: center center;\n  -webkit-filter: none;\n          filter: none;\n}\n.user-name[data-v-33377670] {\n  padding: 40px 0 50px;\n  line-height: 32px;\n  text-align: center;\n}\n.nav[data-v-33377670] {\n  padding: 0;\n  margin: 0;\n}\n.nav li[data-v-33377670] {\n  list-style: none;\n  border-bottom: 1px solid #ddd;\n  background: #fbfbfb;\n}\n.nav li[data-v-33377670]:first-of-type {\n  border-top: 1px solid #ddd;\n}\n.nav a[data-v-33377670] {\n  padding: 8px 10px;\n  line-height: 28px;\n}\n.nav a .icon[data-v-33377670] {\n  width: 45px;\n}\n.nav a .icon .iconfont[data-v-33377670] {\n  font-size: 24px;\n  color: #aaa;\n}\n.nav a .text[data-v-33377670] {\n  font-size: 13px;\n  color: #222;\n}\n.nav a .icon-arrow-right[data-v-33377670] {\n  color: #ccc;\n}\n", ""]);

	// exports


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "headimg-bg.jpg?v=55bfe251347ce829af67d68847a6806c";

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(23);

	var _routeData = __webpack_require__(40);

	var _routeData2 = _interopRequireDefault(_routeData);

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

	exports.default = {
	    mixins: [_routeData2.default],
	    computed: (0, _vuex.mapState)({ user: function user(state) {
	            return state.user;
	        } }),
	    routeData: function routeData() {
	        return {};
	    }
	};

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "个人中心"
	    }
	  }, [(_vm.user.id) ? _h('div', {
	    staticClass: "item",
	    attrs: {
	      "flex": "main:center cross:center"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$router.push('/signout')
	      }
	    },
	    slot: "right"
	  }, [_h('i', {
	    staticClass: "iconfont icon-signout"
	  })]) : _vm._e()]), " ", _h('v-content', {
	    directives: [{
	      name: "scroll-record",
	      rawName: "v-scroll-record"
	    }],
	    staticClass: "con"
	  }, [(_vm.user.avatar_url) ? _h('router-link', {
	    attrs: {
	      "to": '/user/' + _vm.user.loginname
	    }
	  }, [_h('div', {
	    staticClass: "user"
	  }), " ", _h('div', {
	    staticClass: "headimg",
	    style: ({
	      backgroundImage: 'url(' + _vm.user.avatar_url + ')'
	    })
	  }), " ", _h('div', {
	    staticClass: "user-name"
	  }, [_vm._s(_vm.user.loginname)])]) : _vm._e(), " ", (!_vm.user.avatar_url) ? _h('router-link', {
	    attrs: {
	      "to": "/login"
	    }
	  }, [_h('div', {
	    staticClass: "user"
	  }), " ", _h('div', {
	    staticClass: "headimg"
	  }), " ", _h('div', {
	    staticClass: "user-name"
	  }, ["你还未登录，请先登录！"])]) : _vm._e(), " ", _h('nav', {
	    staticClass: "nav"
	  }, [_h('li', [_h('router-link', {
	    attrs: {
	      "to": "/topic/create",
	      "flex": "box:justify"
	    }
	  }, [_h('div', {
	    staticClass: "icon",
	    attrs: {
	      "flex": "cross:center"
	    }
	  }, [_h('i', {
	    staticClass: "iconfont icon-edit",
	    staticStyle: {
	      "color": "#14b11d"
	    }
	  })]), " ", _h('div', {
	    staticClass: "text"
	  }, ["发表主题"]), " ", _h('div', {
	    staticClass: "arrow"
	  }, [_h('i', {
	    staticClass: "iconfont icon-arrow-right"
	  })])])]), " ", _h('li', [_h('router-link', {
	    attrs: {
	      "to": "/home/messages",
	      "flex": "box:justify"
	    }
	  }, [_h('div', {
	    staticClass: "icon",
	    attrs: {
	      "flex": "cross:center"
	    }
	  }, [_h('i', {
	    staticClass: "iconfont icon-msg",
	    staticStyle: {
	      "color": "#bd1616"
	    }
	  })]), " ", _h('div', {
	    staticClass: "text"
	  }, ["我的消息"]), " ", _h('div', {
	    staticClass: "arrow"
	  }, [_h('i', {
	    staticClass: "iconfont icon-arrow-right"
	  })])])])]), " ", _h('div', {
	    staticStyle: {
	      "height": "50px"
	    }
	  }), " ", _h('nav', {
	    staticClass: "nav"
	  }, [_h('li', [_h('router-link', {
	    attrs: {
	      "to": "/about",
	      "flex": "box:justify"
	    }
	  }, [_h('div', {
	    staticClass: "icon",
	    attrs: {
	      "flex": "cross:center"
	    }
	  }, [_h('i', {
	    staticClass: "iconfont icon-about"
	  })]), " ", _h('div', {
	    staticClass: "text"
	  }, ["关于"]), " ", _h('div', {
	    staticClass: "arrow"
	  }, [_h('i', {
	    staticClass: "iconfont icon-arrow-right"
	  })])])])]), " ", _h('div', {
	    staticStyle: {
	      "height": "50px"
	    }
	  })]), " ", _h('v-footer')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-33377670", module.exports)
	  }
	}

/***/ }

});