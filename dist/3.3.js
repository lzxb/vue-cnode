webpackJsonp([3],{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(32)

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
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
	__vue_options__.__file = "/Users/lzxb/Documents/vue-cnode/src/pages/about/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3ccd41f3"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ccd41f3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3ccd41f3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ccd41f3&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ccd41f3&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n.about[data-v-3ccd41f3] {\n  padding: 10px;\n  line-height: 22px;\n}\n.about dt[data-v-3ccd41f3] {\n  line-height: 28px;\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },

/***/ 34:
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('v-header', {
	    attrs: {
	      "title": "关于"
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
	    }
	  }, [_h('div', {
	    staticClass: "about"
	  }, [_h('dl', [_h('dt', ["前言"]), " ", _h('dd', ["\n                    项目灵感的最初来源是来自", _h('a', ["@shinygang"]), "的Vue-cnodejs，感谢cnodejs社区提供的API。\n                "]), " ", _h('dt', ["技术栈"]), " ", _h('dd', ["\n                    项目基于vue2、vue-router、vuex、flex.css、ES6进行开发，使用了webpack、babel编译。\n                "]), " ", _h('dt', ["感悟"]), " ", _h('dd', ["\n                    在vue-cnode升级vue2的时候，在公司内部已经有两个正式项目使用vue2， 遇到的一个最难的问题，就是如何能在页面后退时还原数据和滚动条位置， 虽然vue2内置了keep-alive组件，vue-router也提供了scrollBehavior方法进行设置，\n                    但是仍然无法满足需求，后来阅读vue-router的源码发现， 每个页面都会自动在history.state对象中存储一个对应的key值， 便利用这个特性实现了页面后退时，数据和滚动条还原， 不过目前只是实现了页面的顶级组件还原，如果需要对顶级组件下的子组件实现数据还原，\n                    可以利用$options._scopeId来实现。哈哈，具体如何实现就要靠大家自己发挥想象力了\n                "]), " ", _h('dt', ["源码"]), " ", _h('dd', [_h('a', {
	    attrs: {
	      "href": "https://github.com/lzxb/vue-cnode",
	      "target": "_blank"
	    }
	  }, ["https://github.com/lzxb/vue-cnode"])]), " ", _h('dt', ["反馈"]), " ", _h('dd', [_h('a', {
	    attrs: {
	      "href": "https://github.com/lzxb/vue-cnode/issues",
	      "target": "_blank"
	    }
	  }, ["https://github.com/lzxb/vue-cnode"])]), " ", _h('dt', ["版本"]), " ", _h('dd', ["\n                    v2.0 beta\n                "])])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3ccd41f3", module.exports)
	  }
	}

/***/ }

});