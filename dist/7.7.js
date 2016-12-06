webpackJsonp([7],{

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(63)

	/* script */
	__vue_exports__ = __webpack_require__(65)

	/* template */
	var __vue_template__ = __webpack_require__(66)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/topic/create/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-43dd100c"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-43dd100c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-43dd100c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43dd100c&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43dd100c&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\nform[data-v-43dd100c] {\n  height: 100%;\n}\n.title[data-v-43dd100c] {\n  padding: 5px 10px;\n}\n.select[data-v-43dd100c] {\n  padding: 5px 10px;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.select select[data-v-43dd100c] {\n  padding: 0;\n  -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n          border-radius: 5px;\n  background: none;\n}\n.con[data-v-43dd100c] {\n  padding: 5px 10px;\n}\n.con textarea[data-v-43dd100c] {\n  line-height: 24px;\n}\ninput[data-v-43dd100c],\nselect[data-v-43dd100c],\ntextarea[data-v-43dd100c] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 32px;\n  padding: 0 5px;\n  line-height: 28px;\n  border: none;\n  font-size: 14px;\n  resize: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

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

	exports.default = {
	    mixins: [_routeData2.default],
	    routeData: function routeData() {
	        return {
	            form: {
	                topic_id: '', //新建主题
	                title: '', //标题
	                tab: '', //发表的板块
	                content: '' }
	        };
	    },

	    methods: {
	        submit: function submit() {
	            var _this = this;

	            var form = this.form;


	            if (!form.title) {
	                return _util2.default.toast('标题不能为空');
	            } else if (!form.tab) {
	                return _util2.default.toast('选项不能为空');
	            } else if (!form.content) {
	                return _util2.default.toast('内容不能为空');
	            }

	            _util2.default.post('/api/v1/topics', this.form, function (_ref) {
	                var success = _ref.success,
	                    topic_id = _ref.topic_id,
	                    error_msg = _ref.error_msg;

	                if (success) {
	                    _this.$router.push({ path: '/topic/' + topic_id });
	                } else {
	                    _util2.default.toast(error_msg);
	                }
	            });
	        }
	    }
	};

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "发表"
	    }
	  }, [_h('a', {
	    staticClass: "item",
	    attrs: {
	      "flex": "main:center cross:center"
	    },
	    on: {
	      "click": _vm.submit
	    },
	    slot: "right"
	  }, [_h('i', {
	    staticClass: "iconfont icon-edit"
	  })])]), " ", _h('v-content', [_h('form', {
	    attrs: {
	      "flex": "dir:top"
	    },
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.submit($event)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "title"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.title),
	      expression: "form.title"
	    }],
	    attrs: {
	      "type": "text",
	      "placeholder": "标题..."
	    },
	    domProps: {
	      "value": _vm._s(_vm.form.title)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.form.title = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "select"
	  }, [_h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.tab),
	      expression: "form.tab"
	    }],
	    on: {
	      "change": function($event) {
	        _vm.form.tab = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, [_h('option', {
	    attrs: {
	      "value": ""
	    }
	  }, ["请选择"]), " ", _h('option', {
	    attrs: {
	      "value": "share"
	    }
	  }, ["分享"]), " ", _h('option', {
	    attrs: {
	      "value": "ask"
	    }
	  }, ["问答"]), " ", _h('option', {
	    attrs: {
	      "value": "job"
	    }
	  }, ["招聘"])])]), " ", _h('div', {
	    staticClass: "con",
	    attrs: {
	      "flex": "dir:top",
	      "flex-box": "1"
	    }
	  }, [_h('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.content),
	      expression: "form.content"
	    }],
	    attrs: {
	      "flex-box": "1",
	      "placeholder": "内容..."
	    },
	    domProps: {
	      "value": _vm._s(_vm.form.content)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.form.content = $event.target.value
	      }
	    }
	  })])])]), " ", _h('v-footer')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-43dd100c", module.exports)
	  }
	}

/***/ }

});