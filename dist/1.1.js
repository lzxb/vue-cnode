webpackJsonp([1],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(15)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(25)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/login/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-43b5eacf"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-43b5eacf", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-43b5eacf", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43b5eacf&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43b5eacf&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.form[data-v-43b5eacf] {\n  width: 80%;\n  padding: 0 10%;\n  margin-top: -50px;\n}\n.form .line[data-v-43b5eacf] {\n  padding: 20px 0;\n}\n.form .text[data-v-43b5eacf] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  padding: 5px 10px;\n  line-height: 28px;\n  -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n          border-radius: 5px;\n  border: 1px solid #ddd;\n  font-size: 14px;\n}\n.form .btn[data-v-43b5eacf] {\n  width: 100%;\n  line-height: 38px;\n  -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n          border-radius: 5px;\n  border: 1px solid #76ae01;\n  font-size: 14px;\n  color: #fff;\n  background: #80bd01;\n}\n", ""]);

	// exports


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _is = __webpack_require__(19);

	var _is2 = _interopRequireDefault(_is);

	var _vuex = __webpack_require__(23);

	var _user = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            form: {
	                accesstoken: ''
	            },
	            status: false //true正在提交， false还没提交
	        };
	    },

	    methods: _extends({}, (0, _vuex.mapActions)([_user.USER_SIGNIN]), {
	        submit: function submit() {
	            var _this = this;

	            if (this.status) return;
	            if (!this.form.accesstoken) return _util2.default.toast('请输入accesstoken');
	            this.status = true;
	            _util2.default.post('/api/v1/accesstoken', this.form, function (res) {

	                if (_is2.default.object(res)) {
	                    if (res.success) {
	                        _util2.default.toast('登录成功');
	                        _this.USER_SIGNIN({
	                            avatar_url: res.avatar_url,
	                            id: res.id,
	                            loginname: res.loginname,
	                            accesstoken: _this.form.accesstoken
	                        });
	                        _this.$router.go(-1);
	                    } else {
	                        _util2.default.toast(res.error_msg);
	                    }
	                } else {
	                    _util2.default.toast('登录失败');
	                }

	                _this.status = false;
	            }, function () {
	                _util2.default.toast('登录失败');
	                _this.status = false;
	            });
	        }
	    })
	};

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "登录"
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
	    staticStyle: {
	      "bottom": "0"
	    },
	    attrs: {
	      "flex": "main:center cross:center"
	    }
	  }, [_h('form', {
	    staticClass: "form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.submit($event)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "line"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.accesstoken),
	      expression: "form.accesstoken"
	    }],
	    staticClass: "text",
	    attrs: {
	      "type": "text",
	      "placeholder": "Access Token"
	    },
	    domProps: {
	      "value": _vm._s(_vm.form.accesstoken)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.form.accesstoken = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "line"
	  }, [_h('button', {
	    staticClass: "btn"
	  }, [_vm._s(_vm.status ? '正在登录中' : '登录')])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-43b5eacf", module.exports)
	  }
	}

/***/ }

});